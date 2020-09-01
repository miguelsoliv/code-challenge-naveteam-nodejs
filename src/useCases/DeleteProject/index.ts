import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import DeleteProjectController from './DeleteProjectController';
import DeleteProjectService from './DeleteProjectService';

const deleteProjectService = new DeleteProjectService(
  new TypeormProjectsRepository(),
  new TypeormUsersRepository()
);

const deleteProjectController = new DeleteProjectController(
  deleteProjectService
);

export default deleteProjectController;
