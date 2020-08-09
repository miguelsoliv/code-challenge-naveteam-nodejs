import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import DeleteNaverController from './DeleteNaverController';
import DeleteNaverService from './DeleteNaverService';

const deleteNaverService = new DeleteNaverService(
  new PostgresNaversRepository()
);

const deleteNaverController = new DeleteNaverController(deleteNaverService);

export default deleteNaverController;
