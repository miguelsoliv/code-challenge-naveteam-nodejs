import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateNaverController from './CreateNaverController';
import CreateNaverService from './CreateNaverService';

const createNaverService = new CreateNaverService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository(),
  new PostgresProjectsRepository(),
  new PostgresNaversProjectsRepository()
);

const createNaverController = new CreateNaverController(createNaverService);

export default createNaverController;
