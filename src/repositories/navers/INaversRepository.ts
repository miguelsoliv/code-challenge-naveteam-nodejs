import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';
import IListNaversDTO from '../../useCases/ListNavers/IListNaversDTO';

export default interface INaversRepository {
  create(data: ICreateNaverDTO): Promise<Naver>;
  update(naver: Naver): Promise<Naver>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<Naver | undefined>;
  findAllByUser(data: IListNaversDTO): Promise<Naver[]>;
}
