import { Router } from 'express';

import CreateUserController from '../useCases/CreateUser';

const usersRoutes = Router();

usersRoutes.post('/', async (request, response) => {
  await CreateUserController.handle(request, response);
});

export default usersRoutes;
