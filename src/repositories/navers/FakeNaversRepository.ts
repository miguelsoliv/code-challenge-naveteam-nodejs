import { v4 } from 'uuid';

import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import INaversRepository from './INaversRepository';

class FakeNaversRepository implements INaversRepository {
  private navers: Naver[] = [];

  public async create(data: ICreateNaverDTO): Promise<Naver> {
    const naver = new Naver();
    Object.assign(naver, { id: v4() }, data);

    this.navers.push(naver);

    return naver;
  }
}

export default FakeNaversRepository;
