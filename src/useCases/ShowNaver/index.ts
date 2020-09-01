import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import ShowNaverController from './ShowNaverController';
import ShowNaverService from './ShowNaverService';

const showNaverService = new ShowNaverService(
  new TypeormNaversRepository(),
  new TypeormNaversProjectsRepository()
);

const showProjectController = new ShowNaverController(showNaverService);

export default showProjectController;
