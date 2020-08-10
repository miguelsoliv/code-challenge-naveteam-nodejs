import NaverProject from '../../models/NaverProject';
import ICreateNaverProjectsDTO from '../../useCases/CreateNaverProject/ICreateNaverProjectsDTO';
import ICreateNaversProjectDTO from '../../useCases/CreateNaverProject/ICreateNaversProjectDTO';
import INaversProjectsRepository from './INaversProjectsRepository';

class FakeNaversProjectsRepository implements INaversProjectsRepository {
  private naversProjects: NaverProject[] = [];

  public async createMultipleNavers({
    naver_ids,
    project_id,
  }: ICreateNaversProjectDTO): Promise<void> {
    naver_ids.forEach(id => {
      this.naversProjects.push({
        naver_id: id,
        project_id,
      });
    });
  }

  public async createMultipleProjecs({
    naver_id,
    project_ids,
  }: ICreateNaverProjectsDTO): Promise<void> {
    project_ids.forEach(id => {
      this.naversProjects.push({
        naver_id,
        project_id: id,
      });
    });
  }

  public async deleteAllByNaver(naver_id: number): Promise<void> {
    this.naversProjects.filter(
      naverProject => naverProject.naver_id !== naver_id
    );
  }

  public async deleteAllByProject(project_id: number): Promise<void> {
    this.naversProjects.filter(
      naverProject => naverProject.project_id !== project_id
    );
  }

  public async findAllByProject(project_id: number): Promise<NaverProject[]> {
    return this.naversProjects.filter(
      naverProject => naverProject.project_id === project_id
    );
  }

  public async findAllByNaver(naver_id: number): Promise<NaverProject[]> {
    return this.naversProjects.filter(
      naverProject => naverProject.naver_id === naver_id
    );
  }
}

export default FakeNaversProjectsRepository;
