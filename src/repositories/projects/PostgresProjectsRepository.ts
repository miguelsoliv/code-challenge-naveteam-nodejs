import { getRepository, Like } from 'typeorm';

import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';
import IListProjectsDTO from '../../useCases/ListProjects/IListProjectsDTO';
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

  public async delete(id: number): Promise<void> {
    await getRepository(Project).delete(id);
  }

  public async findById(id: number): Promise<Project | undefined> {
    return getRepository(Project).findOne(id);
  }

  public async findAllByUser({
    user_id,
    query,
  }: IListProjectsDTO): Promise<Project[]> {
    const whereObject = {
      user_id,
    };

    if (query.name) {
      Object.assign(whereObject, { name: Like(`%${query.name}%`) });
    }

    return getRepository(Project).find({
      where: whereObject,
    });
  }
}

export default PostgresProjectsRepository;
