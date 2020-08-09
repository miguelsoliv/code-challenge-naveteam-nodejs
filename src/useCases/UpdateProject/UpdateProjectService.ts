import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Project from '../../models/Project';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IUpdateProjectDTO from './IUpdateProjectDTO';

// TODO: create test
class UpdateProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private usersRepository: IUsersRepository,
    private naversRepository: INaversRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute({
    project_id,
    user_id,
    name,
    navers,
  }: IUpdateProjectDTO): Promise<Project> {
    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    const project = await this.projectsRepository.findById(project_id);

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    if (project.user_id !== user_id) {
      throw new AppError('This project is not related to you', 401);
    }

    await Promise.all(
      navers.map(async id => {
        const naverExists = await this.naversRepository.findById(id);

        if (!naverExists) {
          throw new AppError(`Naver with ID ${id} not found`, 404);
        }
      })
    );

    await this.naversProjectsRepository.deleteAllByProject(project.id);

    project.name = name;

    await this.naversProjectsRepository.createMultipleNavers({
      naver_ids: navers,
      project_id: project.id,
    });

    const updatedProject = await this.projectsRepository.update(project);

    return classToClass(updatedProject);
  }
}

export default UpdateProjectService;
