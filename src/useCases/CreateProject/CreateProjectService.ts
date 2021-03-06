import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Project from '../../models/Project';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import ICreateProjectDTO from './ICreateProjectDTO';

// TODO: create test
class CreateProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private usersRepository: IUsersRepository,
    private naversRepository: INaversRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute(data: ICreateProjectDTO): Promise<Project> {
    const userExists = await this.usersRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    await Promise.all(
      data.navers.map(async id => {
        const naverExists = await this.naversRepository.findById(id);

        if (!naverExists) {
          throw new AppError(`Naver with ID ${id} not found`, 404);
        }
      })
    );

    const project = await this.projectsRepository.create(data);

    await this.naversProjectsRepository.createMultipleNavers({
      naver_ids: data.navers,
      project_id: project.id,
    });

    return classToClass(project);
  }
}

export default CreateProjectService;
