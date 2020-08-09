import PostgresNaversRepository from '../../repositories/navers/PostgresNaversRepository';
import PostgresNaversProjectsRepository from '../../repositories/naversProjects/PostgresNaversProjectsRepository';
import ShowNaverController from './ShowNaverController';
import ShowNaverService from './ShowNaverService';

const showNaverService = new ShowNaverService(
  new PostgresNaversRepository(),
  new PostgresNaversProjectsRepository()
);

const showProjectController = new ShowNaverController(showNaverService);

export default showProjectController;
