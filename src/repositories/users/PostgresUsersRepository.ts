import { getRepository } from 'typeorm';

import User from '../../models/User';
import ICreateUserDTO from '../../useCases/CreateUser/ICreateUserDTO';
import IUsersRepository from './IUsersRepository';

class PostgresUsersRepository implements IUsersRepository {
  public async create(data: ICreateUserDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const user = usersRepository.create(data);

    return usersRepository.save(user);
  }

  public async findById(id: string): Promise<User | undefined> {
    return getRepository(User).findOne(id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return getRepository(User).findOne({
      where: {
        email,
      },
    });
  }
}

export default PostgresUsersRepository;
