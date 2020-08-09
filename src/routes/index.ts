import { Router } from 'express';

import ensureUserAuthenticated from '../middlewares/ensureUserAuthenticated';
import naversRoutes from './navers.routes';
import projectsRoutes from './projects.routes';
import sessionRoutes from './session.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/session', sessionRoutes);
routes.use('/users', usersRoutes);

routes.use(ensureUserAuthenticated);
routes.use('/navers', naversRoutes);
routes.use('/projects', projectsRoutes);

export default routes;
