import { getRepository } from 'typeorm';

import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import IListNaversDTO from '../../useCases/ListNavers/IListNaversDTO';
import INaversRepository from './INaversRepository';

class TypeormNaversRepository implements INaversRepository {
  public async create(data: ICreateNaverDTO): Promise<Naver> {
    const naversRepository = getRepository(Naver);

    const naver = naversRepository.create(data);

    return naversRepository.save(naver);
  }

  public async update(naver: Naver): Promise<Naver> {
    return getRepository(Naver).save(naver);
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
    let whereClause = 'user_id = :user_id';
    const whereVariables = { user_id };

    if (query.name) {
      whereClause += ' AND LOWER(name) LIKE LOWER(:name)';
      Object.assign(whereVariables, { name: `%${query.name}%` });
    }

    if (query.admission_date) {
      whereClause += ' AND admission_date = :admission_date';
      Object.assign(whereVariables, { admission_date: query.admission_date });
    }

    if (query.job_role) {
      whereClause += ' AND LOWER(job_role) LIKE LOWER(:job_role)';
      Object.assign(whereVariables, { job_role: `%${query.job_role}%` });
    }

    return getRepository(Naver)
      .createQueryBuilder()
      .where(whereClause, whereVariables)
      .getMany();
  }
}

export default TypeormNaversRepository;
