import { Router } from 'express';

import CreateProject from '../useCases/CreateProject';

const projectsRoutes = Router();

projectsRoutes.post('/', async (request, response) => {
  await CreateProject.handle(request, response);
});

export default projectsRoutes;
