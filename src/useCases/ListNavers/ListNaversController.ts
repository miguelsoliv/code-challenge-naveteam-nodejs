import { Request, Response } from 'express';

import ListNaversService from './ListNaversService';

/**
 * @class ListNaversController
 * @description Handles navers info
 *
 * @status {401} Unauthorized
 * @status {200} OK
 */
class ListNaversController {
  constructor(private listNaversService: ListNaversService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const naversFromUser = await this.listNaversService.execute({
      user_id,
      query: request.query,
    });

    return response.status(200).json(naversFromUser);
  }
}

export default ListNaversController;
