import { Router } from 'express';

import CreateProject from '../useCases/CreateProject';
import DeleteProject from '../useCases/DeleteProject';

const projectsRoutes = Router();

projectsRoutes.post('/', async (request, response) => {
  await CreateProject.handle(request, response);
});

projectsRoutes.delete('/:id', async (request, response) => {
  await DeleteProject.handle(request, response);
});

export default projectsRoutes;
