import AppError from '../../errors/AppError';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IDeleteProjectDTO from './IDeleteProjectDTO';

// TODO: create test
class DeleteProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute({ project_id, user_id }: IDeleteProjectDTO): Promise<void> {
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

    await this.projectsRepository.delete(project_id);
  }
}

export default DeleteProjectService;
