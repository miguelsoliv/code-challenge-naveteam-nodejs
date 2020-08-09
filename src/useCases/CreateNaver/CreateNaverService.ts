import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import INaversRepository from '../../repositories/navers/INaversRepository';
import IUsersRepository from '../../repositories/users/IUsersRepository';
import ICreateNaverDTO from './ICreateNaverDTO';

class CreateNaverService {
  constructor(
    private naversRepository: INaversRepository,
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateNaverDTO): Promise<Naver> {
    console.log(`projects id: [${data.projects}]`);

    const userExists = await this.usersRepository.findById(data.user_id);

    if (!userExists) {
      throw new AppError('Invalid user', 404);
    }

    const naver = await this.naversRepository.create(data);

    return classToClass(naver);
  }
}

export default CreateNaverService;
