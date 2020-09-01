import { getRepository } from 'typeorm';

import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';
import IListProjectsDTO from '../../useCases/ListProjects/IListProjectsDTO';
import IProjectsRepository from './IProjectsRepository';

class TypeormProjectsRepository implements IProjectsRepository {
  public async create({ user_id, name }: ICreateProjectDTO): Promise<Project> {
    const projectsRepository = getRepository(Project);

    const project = projectsRepository.create({
      user_id,
      name,
    });

    return projectsRepository.save(project);
  }

  public async update(project: Project): Promise<Project> {
    return getRepository(Project).save(project);
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
    let whereClause = 'user_id = :user_id';
    const whereVariables = { user_id };

    if (query.name) {
      whereClause += ' AND LOWER(name) LIKE LOWER(:name)';
      Object.assign(whereVariables, { name: `%${query.name}%` });
    }

    return getRepository(Project)
      .createQueryBuilder()
      .where(whereClause, whereVariables)
      .getMany();
  }
}

export default TypeormProjectsRepository;
