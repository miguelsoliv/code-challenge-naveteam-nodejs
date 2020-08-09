import { Router } from 'express';

import CreateNaverController from '../useCases/CreateNaver';
import DeleteNaverController from '../useCases/DeleteNaver';
import ShowNaverController from '../useCases/ShowNaver';

const naversRoutes = Router();

naversRoutes.post('/', async (request, response) => {
  await CreateNaverController.handle(request, response);
});

naversRoutes.get('/:id', async (request, response) => {
  await ShowNaverController.handle(request, response);
});

naversRoutes.delete('/:id', async (request, response) => {
  await DeleteNaverController.handle(request, response);
});

export default naversRoutes;
