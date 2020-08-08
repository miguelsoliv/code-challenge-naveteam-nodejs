import faker from 'faker';

import AppError from '../../errors/AppError';
import User from '../../models/User';
import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import FakeUsersRepository from '../../repositories/users/FakeUsersRepository';
import CreateUserService from '../CreateUser/CreateUserService';
import AuthenticateUserService from './AuthenticateUserService';

describe('ENDPOINT /session', () => {
  const fakerUsersRepository = new FakeUsersRepository();
  const hashProvider = new BCryptHashProvider();

  const createUserService = new CreateUserService(
    fakerUsersRepository,
    hashProvider
  );

  const authenticateUserService = new AuthenticateUserService(
    fakerUsersRepository,
    hashProvider
  );

  const userData = new User();
  userData.name = faker.name.firstName();
  userData.email = faker.internet.email();
  userData.password = faker.random.alphaNumeric(8);

  const anotherUserData = new User();
  anotherUserData.name = faker.name.firstName();
  anotherUserData.email = faker.internet.email();
  anotherUserData.password = faker.random.alphaNumeric(8);

  describe('Should be able to authenticate a user', () => {
    it('[200] POST /session -', async () => {
      const createdUser = await createUserService.execute({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      const authenticatedUser = await authenticateUserService.execute({
        email: userData.email,
        password: userData.password,
      });

      expect(authenticatedUser).toEqual({
        user: {
          id: createdUser.id,
          name: userData.name,
          email: userData.email,
        },
        token: authenticatedUser.token,
      });
    });
  });

  describe('Should not be able to authenticate a user with non-existing email', () => {
    it('[406] POST /session -', async () => {
      await expect(
        authenticateUserService.execute({
          email: anotherUserData.email,
          password: anotherUserData.password,
        })
      ).rejects.toEqual<AppError>({
        message: 'Email or password invalid',
        statusCode: 406,
      });
    });
  });

  describe('Should not be able to authenticate a user with incorrect password', () => {
    it('[406] POST /session -', async () => {
      await expect(
        authenticateUserService.execute({
          email: userData.email,
          password: anotherUserData.password,
        })
      ).rejects.toEqual<AppError>({
        message: 'Email or password invalid',
        statusCode: 406,
      });
    });
  });
});
