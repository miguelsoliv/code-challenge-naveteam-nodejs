import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import ShowProjectController from './ShowProjectController';
import ShowProjectService from './ShowProjectService';

const showProjectService = new ShowProjectService(
  new PostgresProjectsRepository(),
  new PostgresNaversProjectsRepository()
);

const showProjectController = new ShowProjectController(showProjectService);

export default showProjectController;
