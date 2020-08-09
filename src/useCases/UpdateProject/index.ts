import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import UpdateProjectController from './UpdateProjectController';
import UpdateProjectService from './UpdateProjectService';

const updateProjectService = new UpdateProjectService(
  new PostgresProjectsRepository(),
  new PostgresUsersRepository(),
  new PostgresNaversRepository(),
  new PostgresNaversProjectsRepository()
);

const updateProjectController = new UpdateProjectController(
  updateProjectService
);

export default updateProjectController;
