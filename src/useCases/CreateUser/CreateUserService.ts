import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import User from '../../models/User';
import IHashProvider from '../../providers/HashProvider/IHashProvider';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import ICreateUserDTO from './ICreateUserDTO';

class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const checkEmailInUse = await this.usersRepository.findByEmail(email);

    if (checkEmailInUse) {
      throw new AppError('Email already in use', 409);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return classToClass(user);
  }
}

export default CreateUserService;
