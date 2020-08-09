import faker from 'faker';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import User from '../../models/User';
import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import FakeNaversRepository from '../../repositories/navers/FakeNaversRepository';
import FakeUsersRepository from '../../repositories/users/FakeUsersRepository';
import CreateUserService from '../CreateUser/CreateUserService';
import CreateNaverService from './CreateNaverService';

let createNaverService: CreateNaverService;
let createdUser: User;
let naverData: Naver;

// TODO: check if NaversProjects are being saved
// TODO: fix
beforeAll(async () => {
  const usersRepository = new FakeUsersRepository();

  const createUserService = new CreateUserService(
    usersRepository,
    new BCryptHashProvider()
  );

  createNaverService = new CreateNaverService(
    new FakeNaversRepository(),
    usersRepository
  );

  createdUser = await createUserService.execute({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(8),
  });

  naverData = new Naver();
  naverData.name = faker.name.firstName();
  naverData.admission_date = faker.date.recent();
  naverData.birthdate = faker.date.past();
  naverData.job_role = faker.name.jobTitle();
  naverData.user_id = createdUser.id;
});

describe('ENDPOINT /navers', () => {
  describe('Should be able to create a naver', () => {
    it('[201] POST /navers -', async () => {
      const createdNaver = await createNaverService.execute({
        name: naverData.name,
        admission_date: naverData.admission_date,
        birthdate: naverData.birthdate,
        job_role: naverData.job_role,
        user_id: naverData.user_id,
        projects: [],
      });

      expect(createdNaver).toEqual({
        id: createdNaver.id,
        name: naverData.name,
        admission_date: naverData.admission_date,
        birthdate: naverData.birthdate,
        job_role: naverData.job_role,
        projects: [],
      });
    });
  });

  describe('Should not be able to create a naver with non-existing user', () => {
    it('[404] POST /navers -', async () => {
      await expect(
        createNaverService.execute({
          name: naverData.name,
          admission_date: naverData.admission_date,
          birthdate: naverData.birthdate,
          job_role: naverData.job_role,
          user_id: 0,
          projects: [],
        })
      ).rejects.toEqual<AppError>({
        message: 'Invalid user',
        statusCode: 404,
      });
    });
  });
});
