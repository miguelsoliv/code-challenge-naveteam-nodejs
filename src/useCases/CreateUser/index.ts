import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserService from './CreateUserService';

const bCryptHashProvider = new BCryptHashProvider();

const postgresUsersRepository = new PostgresUsersRepository();
const createUserService = new CreateUserService(
  postgresUsersRepository,
  bCryptHashProvider
);

const createUserController = new CreateUserController(createUserService);

export default createUserController;
