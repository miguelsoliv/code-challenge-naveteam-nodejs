import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserService from './CreateUserService';

const createUserService = new CreateUserService(
  new TypeormUsersRepository(),
  new BCryptHashProvider()
);

const createUserController = new CreateUserController(createUserService);

export default createUserController;
