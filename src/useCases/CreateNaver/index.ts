import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateNaverController from './CreateNaverController';
import CreateNaverService from './CreateNaverService';

const createNaverService = new CreateNaverService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository()
);

const createNaverController = new CreateNaverController(createNaverService);

export default createNaverController;
