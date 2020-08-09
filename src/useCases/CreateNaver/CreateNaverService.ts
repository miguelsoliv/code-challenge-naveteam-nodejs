import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import ICreateNaverDTO from './ICreateNaverDTO';

class CreateNaverService {
  constructor(
    private naversRepository: INaversRepository,
    private usersRepository: IUsersRepository,
    private projectsRepository: IProjectsRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute(data: ICreateNaverDTO): Promise<Naver> {
    const userExists = await this.usersRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    await Promise.all(
      data.projects.map(async id => {
        const projectExists = await this.projectsRepository.findById(id);

        if (!projectExists) {
          throw new AppError(`Project with ID ${id} not found`, 404);
        }
      })
    );

    const naver = await this.naversRepository.create(data);

    await this.naversProjectsRepository.createMultipleProjecs({
      naver_id: naver.id,
      project_ids: data.projects,
    });

    return classToClass(naver);
  }
}

export default CreateNaverService;
