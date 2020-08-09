import Naver from '../../models/Naver';
import ICreateNaverDTO from '../../useCases/CreateNaver/ICreateNaverDTO';

export default interface INaversRepository {
  create(data: ICreateNaverDTO): Promise<Naver>;
  findById(id: number): Promise<Naver | undefined>;
}
