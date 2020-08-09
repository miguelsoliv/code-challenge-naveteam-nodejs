import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import DeleteNaverController from './DeleteNaverController';
import DeleteNaverService from './DeleteNaverService';

const deleteNaverService = new DeleteNaverService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository()
);

const deleteNaverController = new DeleteNaverController(deleteNaverService);

export default deleteNaverController;
