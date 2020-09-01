import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import UpdateNaverController from './UpdateNaverController';
import UpdateNaverService from './UpdateNaverService';

const updateNaverService = new UpdateNaverService(
  new TypeormNaversRepository(),
  new TypeormUsersRepository(),
  new TypeormProjectsRepository(),
  new TypeormNaversProjectsRepository()
);

const updateNaverController = new UpdateNaverController(updateNaverService);

export default updateNaverController;
