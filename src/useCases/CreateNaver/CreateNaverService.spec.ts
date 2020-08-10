import faker from 'faker';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import BCryptHashProvider from '../../providers/HashProvider/BCryptHashProvider';
import FakeNaversRepository from '../../repositories/navers/FakeNaversRepository';
import FakeNaversProjectsRepository from '../../repositories/naversProjects/FakeNaversProjectsRepository';
import FakeProjectsRepository from '../../repositories/projects/FakeProjectsRepository';
import FakeUsersRepository from '../../repositories/users/FakeUsersRepository';
import CreateUserService from '../CreateUser/CreateUserService';
import CreateNaverService from './CreateNaverService';

let fakeNaversProjectsRepository: FakeNaversProjectsRepository;
let createNaverService: CreateNaverService;
let naverData: Naver;

beforeAll(async () => {
  const fakeUsersRepository = new FakeUsersRepository();
  const fakeProjectsRepository = new FakeProjectsRepository();
  fakeNaversProjectsRepository = new FakeNaversProjectsRepository();

  const createUserService = new CreateUserService(
    fakeUsersRepository,
    new BCryptHashProvider()
  );

  createNaverService = new CreateNaverService(
    new FakeNaversRepository(),
    fakeUsersRepository,
    fakeProjectsRepository,
    fakeNaversProjectsRepository
  );

  await createUserService.execute({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.random.alphaNumeric(8),
  });

  await fakeProjectsRepository.create({
    user_id: 1,
    name: faker.name.jobArea(),
    navers: [],
  });

  naverData = new Naver();
  naverData.name = faker.name.firstName();
  naverData.admission_date = faker.date.recent();
  naverData.birthdate = faker.date.past();
  naverData.job_role = faker.name.jobTitle();
  naverData.user_id = 1;
});

describe('ENDPOINT /navers', () => {
  describe('Should be able to create a naver', () => {
    it('[201] POST /navers -', async () => {
      const createdNaver = await createNaverService.execute({
        ...naverData,
        projects: [1],
      });

      expect(createdNaver).toMatchObject({
        id: createdNaver.id,
        name: naverData.name,
        admission_date: naverData.admission_date,
        birthdate: naverData.birthdate,
        job_role: naverData.job_role,
      });
    });
  });

  describe('Should be able to attach a project to a naver', () => {
    it('[201] POST /navers -', async () => {
      const naverProjects = await fakeNaversProjectsRepository.findAllByNaver(
        1
      );

      expect(naverProjects).toHaveLength(1);
    });
  });

  describe('Should not be able to create a naver with non-existing user', () => {
    it('[404] POST /navers -', async () => {
      await expect(
        createNaverService.execute({
          ...naverData,
          user_id: 0,
          projects: [],
        })
      ).rejects.toEqual<AppError>({
        message: 'Invalid user',
        statusCode: 404,
      });
    });
  });

  describe('Should not be able to create a naver with non-existing project ID', () => {
    it('[404] POST /navers -', async () => {
      await expect(
        createNaverService.execute({
          ...naverData,
          projects: [0],
        })
      ).rejects.toEqual<AppError>({
        message: 'Project with ID 0 not found',
        statusCode: 404,
      });
    });
  });
});
