import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import ShowProjectController from './ShowProjectController';
import ShowProjectService from './ShowProjectService';

const showProjectService = new ShowProjectService(
  new TypeormProjectsRepository(),
  new TypeormNaversProjectsRepository()
);

const showProjectController = new ShowProjectController(showProjectService);

export default showProjectController;
