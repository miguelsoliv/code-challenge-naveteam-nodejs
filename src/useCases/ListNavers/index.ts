import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import ListNaversController from './ListNaversController';
import ListNaversService from './ListNaversService';

const listNaversService = new ListNaversService(
  new TypeormNaversRepository(),
  new TypeormUsersRepository()
);

const listNaversController = new ListNaversController(listNaversService);

export default listNaversController;
