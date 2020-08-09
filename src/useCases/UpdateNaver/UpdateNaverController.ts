import { Request, Response } from 'express';

import UpdateNaverService from './UpdateNaverService';

/**
 * @class UpdateNaverController
 * @description Handles naver alterations
 *
 * @status {404} Not Found
 * @status {401} Unauthorized
 * @status {200} OK
 */
class UpdateNaverController {
  constructor(private updateNaverService: UpdateNaverService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const user_id = request.user.id;
    const {
      name,
      admission_date,
      birthdate,
      job_role,
      projects,
    } = request.body;

    const updatedNaver = await this.updateNaverService.execute({
      naver_id: Number(id),
      user_id,
      name,
      admission_date,
      birthdate,
      job_role,
      projects,
    });

    return response.status(200).json(updatedNaver);
  }
}

export default UpdateNaverController;
