import { Request, Response } from 'express';

import ShowNaverService from './ShowNaverService';

/**
 * @class ShowNaverController
 * @description Handles single naver info
 *
 * @status {404} Not Found
 * @status {204} No Content
 */
class ShowNaverController {
  constructor(private showNaverService: ShowNaverService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const naverInfo = await this.showNaverService.execute(Number(id));

    return response.status(200).json(naverInfo);
  }
}

export default ShowNaverController;
