import { getRepository } from 'typeorm';

import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import INaversRepository from './INaversRepository';

class PostgresNaversRepository implements INaversRepository {
  public async create(data: ICreateNaverDTO): Promise<Naver> {
    const naversRepository = getRepository(Naver);

    const naver = naversRepository.create(data);

    return naversRepository.save(naver);
  }
}

export default PostgresNaversRepository;
