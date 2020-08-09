import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import ICreateNaverDTO from './ICreateNaverDTO';

class CreateNaverService {
  constructor(
    private naversRepository: INaversRepository,
    private usersRepository: IUsersRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute(data: ICreateNaverDTO): Promise<Naver> {
    const userExists = await this.usersRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    const naver = await this.naversRepository.create(data);

    /* const insertPromises: Promise<any>[] = [];

    data.projects.forEach(projectId => {
      insertPromises.push(
        this.naversProjectsRepository.create({
          naver_id: naver.id,
          project_id: projectId,
        })
      );
    });

    await Promise.all(insertPromises); */

    await this.naversProjectsRepository.createMultipleProjecs({
      naver_id: naver.id,
      project_ids: data.projects,
    });

    return classToClass(naver);
  }
}

export default CreateNaverService;
