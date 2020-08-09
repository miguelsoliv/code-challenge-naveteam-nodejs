import { Request, Response } from 'express';

import CreateNaverService from './CreateNaverService';

/**
 * @class CreateNaverController
 * @description Handles naver creation
 *
 * @status {404} Not Found
 * @status {201} Created
 */
class CreateNaverController {
  constructor(private createNaverService: CreateNaverService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      admission_date,
      birthdate,
      job_role,
      projects,
    } = request.body;

    const naver = await this.createNaverService.execute({
      user_id: request.user.id,
      name,
      admission_date,
      birthdate,
      job_role,
      projects,
    });

    return response.status(201).json(naver);
  }
}

export default CreateNaverController;
