import ICreateNaverProjectsDTO from '../../useCases/CreateNaverProject/ICreateNaverProjectsDTO';
import ICreateNaversProjectDTO from '../../useCases/CreateNaverProject/ICreateNaversProjectDTO';

export default interface INaversProjectsRepository {
  createMultipleNavers(data: ICreateNaversProjectDTO): Promise<void>;
  createMultipleProjecs(data: ICreateNaverProjectsDTO): Promise<void>;
}
