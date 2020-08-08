import { Request, Response } from 'express';

import CreateUserService from './CreateUserService';

/**
 * @class CreateUserController
 * @description Handles user creation
 *
 * @status {409} Conflict
 * @status {201} Created
 */
class CreateUserController {
  constructor(private createUserService: CreateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const user = await this.createUserService.execute({
      email,
      password,
    });

    return response.status(201).json(user);
  }
}

export default CreateUserController;
