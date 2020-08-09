import Naver from '../../models/Naver';
import usersRoutes from '../../routes/users.routes';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import INaversRepository from './INaversRepository';

class FakeNaversRepository implements INaversRepository {
  private navers: Naver[] = [];

  private counter = 1;

  public async create(data: ICreateNaverDTO): Promise<Naver> {
    const naver = new Naver();
    Object.assign(naver, { id: this.counter }, data);

    this.navers.push(naver);
    this.counter += 1;

    return naver;
  }

  public async delete(id: number): Promise<void> {
    this.navers.filter(naver => naver.id !== id);
  }

  public async findById(id: number): Promise<Naver | undefined> {
    return this.navers.find(naver => naver.id === id);
  }
}

export default FakeNaversRepository;
