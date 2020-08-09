import { Request, Response } from 'express';

import CreateProjectService from './CreateProjectService';

/**
 * @class CreateProjectController
 * @description Handles project creation
 *
 * @status {404} Not Found
 * @status {201} Created
 */
class CreateProjectController {
  constructor(private createProjectService: CreateProjectService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, navers } = request.body;

    const project = await this.createProjectService.execute({
      user_id: request.user.id,
      name,
      navers,
    });

    return response.status(201).json(project);
  }
}

export default CreateProjectController;
