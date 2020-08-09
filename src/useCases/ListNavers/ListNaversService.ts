import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Project from '../../models/Project';
import INaversRepository from '../../repositories/navers/INaversRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import IListNaversDTO from './IListNaversDTO';

// TODO: create test
class ListNaversService {
  constructor(
    private naversRepository: INaversRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, query }: IListNaversDTO): Promise<Project[]> {
    const usersExists = await this.usersRepository.findById(user_id);

    if (!usersExists) {
      throw new AppError('Invalid user', 404);
    }

    const navers = await this.naversRepository.findAllByUser({
      user_id,
      query,
    });

    return classToClass(navers);
  }
}

export default ListNaversService;
