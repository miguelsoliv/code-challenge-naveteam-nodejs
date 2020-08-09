import { Request, Response } from 'express';

import DeleteProjectService from './DeleteProjectService';

/**
 * @class DeleteProjectController
 * @description Handles project exclusion
 *
 * @status {404} Not Found
 * @status {401} Unauthorized
 * @status {204} No Content
 */
class DeleteProjectController {
  constructor(private deleteProjectService: DeleteProjectService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    await this.deleteProjectService.execute({
      project_id: Number(id),
      user_id,
    });

    return response.status(204).json();
  }
}

export default DeleteProjectController;
