import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import DeleteProjectController from './DeleteProjectController';
import DeleteProjectService from './DeleteProjectService';

const deleteProjectService = new DeleteProjectService(
  new PostgresProjectsRepository(),
  new PostgresUsersRepository()
);

const deleteProjectController = new DeleteProjectController(
  deleteProjectService
);

export default deleteProjectController;
