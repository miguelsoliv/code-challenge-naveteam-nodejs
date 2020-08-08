import { classToClass } from 'class-transformer';
import { sign } from 'jsonwebtoken';

import AppError from '../../errors/AppError';
import User from '../../models/User';
import IHashProvider from '../../providers/HashProvider/IHashProvider';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IAuthenticateUserDTO from './IAuthenticateUserDTO';

interface IResponse {
  user: User;
  token: string;
}

class AuthenticateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashRepository: IHashProvider
  ) {}

  async execute({ email, password }: IAuthenticateUserDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password invalid', 406);
    }

    const isPasswordOk = await this.hashRepository.compareHashs(
      password,
      user.password
    );

    if (!isPasswordOk) {
      throw new AppError('Email or password invalid', 406);
    }

    return {
      user: classToClass(user),
      token: sign({}, process.env.JWT_SECRET || 'my-secret', {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRES_IN || '12h',
      }),
    };
  }
}

export default AuthenticateUserService;
