import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '../errors/AppError';

interface ITokenPayload {
  sub: string;
}

const ensureUserAuthenticated = (
  request: Request,
  _: Response,
  next: NextFunction
): void => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const validToken = verify(token, process.env.JWT_SECRET || 'my-secret');

    const { sub: subject } = validToken as ITokenPayload;

    request.user = {
      id: Number(subject),
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT', 401);
  }
};

export default ensureUserAuthenticated;
