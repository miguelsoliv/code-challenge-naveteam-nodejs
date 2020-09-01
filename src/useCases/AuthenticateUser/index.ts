import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import AuthenticateUserController from './AuthenticateUserController';
import AuthenticateUserService from './AuthenticateUserService';

const authenticateUserService = new AuthenticateUserService(
  new TypeormUsersRepository(),
  new BCryptHashProvider()
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserService
);

export default authenticateUserController;
