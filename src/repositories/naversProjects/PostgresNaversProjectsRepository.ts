import { getRepository } from 'typeorm';

import NaverProject from '../../models/NaverProject';
import ICreateNaverProjectsDTO from '../../useCases/CreateNaverProject/ICreateNaverProjectsDTO';
import ICreateNaversProjectDTO from '../../useCases/CreateNaverProject/ICreateNaversProjectDTO';
import INaversProjectsRepository from './INaversProjectsRepository';

class PostgresNaversProjectsRepository implements INaversProjectsRepository {
  public async createMultipleNavers({
    naver_ids,
    project_id,
  }: ICreateNaversProjectDTO): Promise<void> {
    const naversProjectsRepository = getRepository(NaverProject);

    const naversProjectsToAdd: NaverProject[] = [];

    naver_ids.forEach(id => {
      naversProjectsToAdd.push({
        naver_id: id,
        project_id,
      });
    });

    const naverProject = naversProjectsRepository.create(naversProjectsToAdd);

    await naversProjectsRepository.save(naverProject);
  }

  public async createMultipleProjecs({
    naver_id,
    project_ids,
  }: ICreateNaverProjectsDTO): Promise<void> {
    const naversProjectsRepository = getRepository(NaverProject);

    const naversProjectsToAdd: NaverProject[] = [];

    project_ids.forEach(id => {
      naversProjectsToAdd.push({
        naver_id,
        project_id: id,
      });
    });

    const naverProject = naversProjectsRepository.create(naversProjectsToAdd);

    await naversProjectsRepository.save(naverProject);
  }
}

export default PostgresNaversProjectsRepository;