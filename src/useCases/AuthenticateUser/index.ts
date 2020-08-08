import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import AuthenticateUserController from './AuthenticateUserController';
import AuthenticateUserService from './AuthenticateUserService';

const authenticateUserService = new AuthenticateUserService(
  new PostgresUsersRepository(),
  new BCryptHashProvider()
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserService
);

export default authenticateUserController;
