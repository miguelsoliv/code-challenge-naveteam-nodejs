import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import DeleteNaverController from './DeleteNaverController';
import DeleteNaverService from './DeleteNaverService';

const deleteNaverService = new DeleteNaverService(
  new TypeormNaversRepository(),
  new TypeormUsersRepository()
);

const deleteNaverController = new DeleteNaverController(deleteNaverService);

export default deleteNaverController;
