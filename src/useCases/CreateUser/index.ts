import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserService from './CreateUserService';

const createUserService = new CreateUserService(
  new PostgresUsersRepository(),
  new BCryptHashProvider()
);

const createUserController = new CreateUserController(createUserService);

export default createUserController;
