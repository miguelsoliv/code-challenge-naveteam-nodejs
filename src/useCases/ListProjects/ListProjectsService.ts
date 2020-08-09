import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Project from '../../models/Project';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IListProjectsDTO from './IListProjectsDTO';

// TODO: create test
class ListProjectsService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, query }: IListProjectsDTO): Promise<Project[]> {
    const usersExists = await this.usersRepository.findById(user_id);

    if (!usersExists) {
      throw new AppError('Invalid user', 404);
    }

    const projects = await this.projectsRepository.findAllByUser({
      user_id,
      query,
    });

    return classToClass(projects);
  }
}

export default ListProjectsService;
