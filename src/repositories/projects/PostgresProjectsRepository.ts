import { getRepository } from 'typeorm';

import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';
import IProjectsRepository from './IProjectsRepository';

class PostgresProjectsRepository implements IProjectsRepository {
  public async create({ user_id, name }: ICreateProjectDTO): Promise<Project> {
    const projectsRepository = getRepository(Project);

    const project = projectsRepository.create({
      user_id,
      name,
    });

    return projectsRepository.save(project);
  }

  public async findById(id: number): Promise<Project | undefined> {
    return getRepository(Project).findOne(id);
  }
}

export default PostgresProjectsRepository;
