import TypeormNaversRepository from '../../repositories/navers/TypeormNaversRepository';
import TypeormNaversProjectsRepository from '../../repositories/naversProjects/TypeormNaversProjectsRepository';
import TypeormProjectsRepository from '../../repositories/projects/TypeormProjectsRepository';
import TypeormUsersRepository from '../../repositories/users/TypeormUsersRepository';
import UpdateProjectController from './UpdateProjectController';
import UpdateProjectService from './UpdateProjectService';

const updateProjectService = new UpdateProjectService(
  new TypeormProjectsRepository(),
  new TypeormUsersRepository(),
  new TypeormNaversRepository(),
  new TypeormNaversProjectsRepository()
);

const updateProjectController = new UpdateProjectController(
  updateProjectService
);

export default updateProjectController;
