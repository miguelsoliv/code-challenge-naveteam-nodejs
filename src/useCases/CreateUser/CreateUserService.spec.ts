import faker from 'faker';

import AppError from '../../errors/AppError';
import User from '../../models/User';
import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import FakeUsersRepository from '../../repositories/users/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('ENDPOINT /users', () => {
  const createUserService = new CreateUserService(
    new FakeUsersRepository(),
    new BCryptHashProvider()
  );

  const userData = new User();
  userData.name = faker.name.firstName();
  userData.email = faker.internet.email();
  userData.password = faker.random.alphaNumeric(8);

  const anotherUserData = new User();
  anotherUserData.name = faker.name.firstName();
  anotherUserData.email = userData.email;
  anotherUserData.password = faker.random.alphaNumeric(8);

  describe('Should be able to create a user', () => {
    it('[201] POST /users -', async () => {
      const createdUser = await createUserService.execute({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      expect(createdUser).toMatchObject({
        id: expect.any(String),
        name: userData.name,
        email: userData.email,
      });
    });
  });

  describe('Should not be able to create a user with same email address', () => {
    it('[409] POST /users -', async () => {
      await expect(
        createUserService.execute({
          name: anotherUserData.name,
          email: anotherUserData.email,
          password: anotherUserData.password,
        })
      ).rejects.toBeInstanceOf(AppError);
    });
  });
});
