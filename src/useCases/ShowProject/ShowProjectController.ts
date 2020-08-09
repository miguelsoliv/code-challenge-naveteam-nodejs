import { Request, Response } from 'express';

import ShowProjectService from './ShowProjectService';

/**
 * @class ShowProjectController
 * @description Handles single project info
 *
 * @status {404} Not Found
 * @status {200} OK
 */
class ShowProjectController {
  constructor(private showProjectService: ShowProjectService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const projectInfo = await this.showProjectService.execute(Number(id));

    return response.status(200).json(projectInfo);
  }
}

export default ShowProjectController;
