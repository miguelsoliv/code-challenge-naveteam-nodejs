import { Request, Response } from 'express';

import ListProjectsService from './ListProjectsService';

/**
 * @class ListProjectsController
 * @description Handles projects info
 *
 * @status {401} Unauthorized
 * @status {200} OK
 */
class ListProjectsController {
  constructor(private listProjectsService: ListProjectsService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const projectsFromUser = await this.listProjectsService.execute({
      user_id,
      query: request.query,
    });

    return response.status(200).json(projectsFromUser);
  }
}

export default ListProjectsController;
