import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import DeleteProjectController from './DeleteProjectController';
import DeleteProjectService from './DeleteProjectService';

const deleteProjectService = new DeleteProjectService(
  new PostgresProjectsRepository()
);

const deleteProjectController = new DeleteProjectController(
  deleteProjectService
);

export default deleteProjectController;
