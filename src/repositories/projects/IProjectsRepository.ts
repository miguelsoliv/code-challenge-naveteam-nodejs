import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';
import IListProjectsDTO from '../../useCases/ListProjects/IListProjectsDTO';

export default interface IProjectsRepository {
  create(data: ICreateProjectDTO): Promise<Project>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Project | undefined>;
  findAllByUser(data: IListProjectsDTO): Promise<Project[]>;
}
