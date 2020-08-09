import { Router } from 'express';

import CreateNaverController from '../useCases/CreateNaver';
import DeleteNaverController from '../useCases/DeleteNaver';
import ListNaversController from '../useCases/ListNavers';
import ShowNaverController from '../useCases/ShowNaver';
import UpdateNaverController from '../useCases/UpdateNaver';

const naversRoutes = Router();

naversRoutes.get('/', async (request, response) => {
  await ListNaversController.handle(request, response);
});

naversRoutes.post('/', async (request, response) => {
  await CreateNaverController.handle(request, response);
});

naversRoutes.get('/:id', async (request, response) => {
  await ShowNaverController.handle(request, response);
});

naversRoutes.put('/:id', async (request, response) => {
  await UpdateNaverController.handle(request, response);
});

naversRoutes.delete('/:id', async (request, response) => {
  await DeleteNaverController.handle(request, response);
});

export default naversRoutes;
