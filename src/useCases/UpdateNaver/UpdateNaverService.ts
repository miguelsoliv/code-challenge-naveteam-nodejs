import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IUpdateNaverDTO from './IUpdateNaverDTO';

// TODO: create test
class UpdateNaverService {
  constructor(
    private naversRepository: INaversRepository,
    private usersRepository: IUsersRepository,
    private projectsRepository: IProjectsRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute({
    naver_id,
    user_id,
    name,
    admission_date,
    birthdate,
    job_role,
    projects,
  }: IUpdateNaverDTO): Promise<Naver> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    const naver = await this.naversRepository.findById(naver_id);

    if (!naver) {
      throw new AppError('Naver not found', 404);
    }

    if (naver.user_id !== user_id) {
      throw new AppError('This naver is not related to you', 401);
    }

    await Promise.all(
      projects.map(async id => {
        const projectExists = await this.projectsRepository.findById(id);

        if (!projectExists) {
          throw new AppError(`Project with ID ${id} not found`, 404);
        }
      })
    );

    await this.naversProjectsRepository.deleteAllByNaver(naver.id);

    Object.assign(naver, { name, admission_date, birthdate, job_role });

    await this.naversProjectsRepository.createMultipleProjecs({
      naver_id: naver.id,
      project_ids: projects,
    });

    const updatedNaver = await this.naversRepository.update(naver);

    return classToClass(updatedNaver);
  }
}

export default UpdateNaverService;
