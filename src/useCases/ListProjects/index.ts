import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import ListProjectsController from './ListProjectsController';
import ListProjectsService from './ListProjectsService';

const listProjectsService = new ListProjectsService(
  new TypeormProjectsRepository(),
  new TypeormUsersRepository()
);

const listProjectsController = new ListProjectsController(listProjectsService);

export default listProjectsController;
