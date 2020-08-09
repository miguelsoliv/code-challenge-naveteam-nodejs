import NaverProject from '../../models/NaverProject';
import ICreateNaverProjectsDTO from '../../useCases/CreateNaverProject/ICreateNaverProjectsDTO';
import ICreateNaversProjectDTO from '../../useCases/CreateNaverProject/ICreateNaversProjectDTO';

export default interface INaversProjectsRepository {
  createMultipleNavers(data: ICreateNaversProjectDTO): Promise<void>;
  createMultipleProjecs(data: ICreateNaverProjectsDTO): Promise<void>;
  deleteAllByNaver(naver_id: number): Promise<void>;
  deleteAllByProject(project_id: number): Promise<void>;
  findAllByNaver(naver_id: number): Promise<NaverProject[]>;
  findAllByProject(project_id: number): Promise<NaverProject[]>;
}
