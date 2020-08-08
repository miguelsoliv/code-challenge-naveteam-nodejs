import faker from 'faker';

import AppError from '../../errors/AppError';
import User from '../../models/User';
import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import FakeUsersRepository from '../../repositories/users/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe('ENDPOINT /users', () => {
  const fakeUsersRepository = new FakeUsersRepository();
  const bCryptHashProvider = new BCryptHashProvider();

  const createUserService = new CreateUserService(
    fakeUsersRepository,
    bCryptHashProvider
  );

  const user = new User();
  user.email = faker.internet.email();
  user.password = faker.random.alphaNumeric(8);

  describe('Should be able to create a user', () => {
    it('[201] POST /users -', async () => {
      const createdUser = await createUserService.execute({
        email: user.email,
        password: user.password,
      });

      expect(createdUser).toMatchObject({
        id: expect.any(String),
        email: user.email,
      });
    });
  });

  describe('Should not be able to create a user with same email address', () => {
    it('[409] POST /users -', async () => {
      await expect(
        createUserService.execute({
          email: user.email,
          password: user.password,
        })
      ).rejects.toBeInstanceOf(AppError);
    });
  });
});
