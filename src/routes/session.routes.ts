import { Router } from 'express';

import AuthenticateUserController from '../useCases/AuthenticateUser';

const sessionRoutes = Router();

sessionRoutes.post('/', async (request, response) => {
  await AuthenticateUserController.handle(request, response);
});

export default sessionRoutes;
