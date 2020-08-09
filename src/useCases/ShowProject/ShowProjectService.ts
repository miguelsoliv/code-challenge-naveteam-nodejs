import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Naver from '../../models/Naver';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';
import IProjectsRepository from '../../repositories/projects/IProjectsRepository';

interface IResponse {
  id: number;
  name: string;
  navers: (Naver | undefined)[];
}

// TODO: create test
class ShowProjectService {
  constructor(
    private projectsRepository: IProjectsRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute(id: number): Promise<IResponse> {
    const project = await this.projectsRepository.findById(id);

    if (!project) {
      throw new AppError('Project not found', 404);
    }

    const naversProjects = await this.naversProjectsRepository.findAllByProject(
      id
    );

    const navers = naversProjects.map(naverProject => naverProject.naver);

    return {
      id: project.id,
      name: project.name,
      navers: classToClass(navers),
    };
  }
}

export default ShowProjectService;
