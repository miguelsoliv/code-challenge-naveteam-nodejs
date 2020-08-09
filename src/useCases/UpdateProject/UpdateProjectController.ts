import { Request, Response } from 'express';

import UpdateProjectService from './UpdateProjectService';

/**
 * @class UpdateProjectController
 * @description Handles project alterations
 *
 * @status {404} Not Found
 * @status {401} Unauthorized
 * @status {200} OK
 */
class UpdateProjectController {
  constructor(private updateProjectService: UpdateProjectService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;
    const { name, navers } = request.body;

    const updatedProject = await this.updateProjectService.execute({
      project_id: Number(id),
      user_id,
      name,
      navers,
    });

    return response.status(200).json(updatedProject);
  }
}

export default UpdateProjectController;
