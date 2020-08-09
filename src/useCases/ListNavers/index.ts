import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import ListNaversController from './ListNaversController';
import ListNaversService from './ListNaversService';

const listNaversService = new ListNaversService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository()
);

const listNaversController = new ListNaversController(listNaversService);

export default listNaversController;
