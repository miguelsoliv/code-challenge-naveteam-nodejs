import Project from '../../models/Project';
import ICreateProjectDTO from '../../useCases/CreateProject/ICreateProjectDTO';
import IListProjectsDTO from '../../useCases/ListProjects/IListProjectsDTO';
import IProjectsRepository from './IProjectsRepository';

class FakeProjectsRepository implements IProjectsRepository {
  private projects: Project[] = [];

  private counter = 1;

  public async create(data: ICreateProjectDTO): Promise<Project> {
    const project = new Project();
    Object.assign(project, { id: this.counter }, data);

    this.projects.push(project);
    this.counter += 1;

    return project;
  }

  public async update(project: Project): Promise<Project> {
    this.projects[project.id] = project;

    return this.projects[project.id];
  }

  public async delete(id: number): Promise<void> {
    this.projects.filter(project => project.id !== id);
  }

  public async findById(id: number): Promise<Project | undefined> {
    return this.projects.find(project => project.id === id);
  }

  public async findAllByUser({
    user_id,
    query,
  }: IListProjectsDTO): Promise<Project[]> {
    const whereObject = { ...query, user_id };

    return this.projects.filter(project => project === whereObject);
  }
}

export default FakeProjectsRepository;
