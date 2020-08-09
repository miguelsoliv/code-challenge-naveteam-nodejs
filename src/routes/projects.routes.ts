import { Router } from 'express';

import CreateProjectController from '../useCases/CreateProject';
import DeleteProjectController from '../useCases/DeleteProject';
import ShowProjectController from '../useCases/ShowProject';

const projectsRoutes = Router();

projectsRoutes.post('/', async (request, response) => {
  await CreateProjectController.handle(request, response);
});

projectsRoutes.get('/:id', async (request, response) => {
  await ShowProjectController.handle(request, response);
});

projectsRoutes.delete('/:id', async (request, response) => {
  await DeleteProjectController.handle(request, response);
});

export default projectsRoutes;
