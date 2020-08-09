import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateNaverController from './CreateNaverController';
import CreateNaverService from './CreateNaverService';

const createNaverService = new CreateNaverService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository(),
  new PostgresNaversProjectsRepository()
);

const createNaverController = new CreateNaverController(createNaverService);

export default createNaverController;
