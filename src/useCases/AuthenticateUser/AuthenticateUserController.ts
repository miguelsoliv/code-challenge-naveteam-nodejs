import { Request, Response } from 'express';

import AuthenticateUserService from './AuthenticateUserService';

/**
 * @class AuthenticateUserController
 * @description Handles user authentication using JWT
 *
 * @status {406} Not Acceptable
 * @status {200} OK
 */
class AuthenticateUserController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticatedUser = await this.authenticateUserService.execute({
      email,
      password,
    });

    return response.status(200).json(authenticatedUser);
  }
}

export default AuthenticateUserController;
