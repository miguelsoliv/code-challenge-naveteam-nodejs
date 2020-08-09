import { Request, Response } from 'express';

import DeleteNaverService from './DeleteNaverService';

/**
 * @class DeleteNaverController
 * @description Handles naver exclusion
 *
 * @status {404} Not Found
 * @status {401} Unauthorized
 * @status {204} No Content
 */
class DeleteNaverController {
  constructor(private deleteNaverService: DeleteNaverService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;

    await this.deleteNaverService.execute({
      naver_id: Number(id),
      user_id,
    });

    return response.status(204).json();
  }
}

export default DeleteNaverController;
