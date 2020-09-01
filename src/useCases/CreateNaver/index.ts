import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import CreateNaverController from './CreateNaverController';
import CreateNaverService from './CreateNaverService';

const createNaverService = new CreateNaverService(
  new TypeormNaversRepository(),
  new TypeormUsersRepository(),
  new TypeormProjectsRepository(),
  new TypeormNaversProjectsRepository()
);

const createNaverController = new CreateNaverController(createNaverService);

export default createNaverController;
