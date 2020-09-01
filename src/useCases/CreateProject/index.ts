import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import CreateProjectController from './CreateProjectController';
import CreateProjectService from './CreateProjectService';

const createProjectService = new CreateProjectService(
  new TypeormProjectsRepository(),
  new TypeormUsersRepository(),
  new TypeormNaversRepository(),
  new TypeormNaversProjectsRepository()
);

const createProjectController = new CreateProjectController(
  createProjectService
);

export default createProjectController;
