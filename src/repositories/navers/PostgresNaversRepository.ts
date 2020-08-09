import { getRepository, Like } from 'typeorm';

import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import IListNaversDTO from '../../useCases/ListNavers/IListNaversDTO';
import INaversRepository from './INaversRepository';

class PostgresNaversRepository implements INaversRepository {
  public async create(data: ICreateNaverDTO): Promise<Naver> {
    const naversRepository = getRepository(Naver);

    const naver = naversRepository.create(data);

    return naversRepository.save(naver);
  }

  public async delete(id: number): Promise<void> {
    await getRepository(Naver).delete(id);
  }

  public async findById(id: number): Promise<Naver | undefined> {
    return getRepository(Naver).findOne(id);
  }

  public async findAllByUser({
    user_id,
    query,
  }: IListNaversDTO): Promise<Naver[]> {
    const whereObject = {
      user_id,
    };

    if (query.name) {
      Object.assign(whereObject, { name: Like(`%${query.name}%`) });
    }

    if (query.admission_date) {
      Object.assign(whereObject, {
        admission_date: query.admission_date,
      });
    }

    if (query.job_role) {
      Object.assign(whereObject, { job_role: Like(`%${query.job_role}%`) });
    }

    return getRepository(Naver).find({
      where: whereObject,
    });
  }
}

export default PostgresNaversRepository;
