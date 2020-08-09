import { Router } from 'express';

import CreateNaverController from '../useCases/CreateNaver';

const naversRoutes = Router();

naversRoutes.post('/', async (request, response) => {
  await CreateNaverController.handle(request, response);
});

export default naversRoutes;
