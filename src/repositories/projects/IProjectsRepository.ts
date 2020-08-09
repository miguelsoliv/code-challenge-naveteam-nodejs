import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';

export default interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Project | undefined>;
}
