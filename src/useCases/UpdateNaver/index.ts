import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import PostgresProjectsRepository from '../../repositories/projects/PostgresProjectsRepository';
import PostgresUsersRepository from '../../repositories/users/PostgresUsersRepository';
import UpdateNaverController from './UpdateNaverController';
import UpdateNaverService from './UpdateNaverService';

const updateNaverService = new UpdateNaverService(
  new PostgresNaversRepository(),
  new PostgresUsersRepository(),
  new PostgresProjectsRepository(),
  new PostgresNaversProjectsRepository()
);

const updateNaverController = new UpdateNaverController(updateNaverService);

export default updateNaverController;
