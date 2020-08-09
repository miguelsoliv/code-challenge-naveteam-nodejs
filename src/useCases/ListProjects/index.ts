import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import ListProjectsController from './ListProjectsController';
import ListProjectsService from './ListProjectsService';

const listProjectsService = new ListProjectsService(
  new PostgresProjectsRepository(),
  new PostgresUsersRepository()
);

const listProjectsController = new ListProjectsController(listProjectsService);

export default listProjectsController;
