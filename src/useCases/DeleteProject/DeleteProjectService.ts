import AppError from '../../errors/AppError';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';
import IDeleteProjectDTO from './IDeleteProjectDTO';

// TODO: create test
class DeleteProjectService {
  constructor(private projectsRepository: IProjectsRepository) {}

  async execute({ project_id, user_id }: IDeleteProjectDTO): Promise<void> {
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
