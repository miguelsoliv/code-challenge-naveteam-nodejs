import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateProjectController from './CreateProjectController';
import CreateProjectService from './CreateProjectService';

const createProjectService = new CreateProjectService(
  new PostgresProjectsRepository(),
  new PostgresUsersRepository(),
  new PostgresNaversProjectsRepository()
);

const createProjectController = new CreateProjectController(
  createProjectService
);

export default createProjectController;
