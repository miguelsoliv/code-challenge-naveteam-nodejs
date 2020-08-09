import { classToClass } from 'class-transformer';

import AppError from '../../errors/AppError';
import Project from '../../models/Project';
import INaversRepository from '../../repositories/navers/INaversRepository';
import INaversProjectsRepository from '../../repositories/naversProjects/INaversProjectsRepository';

interface IResponse {
  id: number;
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  projects: (Project | undefined)[];
}

// TODO: create test
class ShowNaverService {
  constructor(
    private naversRepository: INaversRepository,
    private naversProjectsRepository: INaversProjectsRepository
  ) {}

  async execute(id: number): Promise<IResponse> {
    const naver = await this.naversRepository.findById(id);

    if (!naver) {
      throw new AppError('Naver not found', 404);
    }

    const naversProjects = await this.naversProjectsRepository.findAllByNaver(
      id
    );

    const projects = naversProjects.map(naverProject => naverProject.project);

    return {
      id: naver.id,
      name: naver.name,
      admission_date: naver.admission_date,
      birthdate: naver.birthdate,
      job_role: naver.job_role,
      projects: classToClass(projects),
    };
  }
}

export default ShowNaverService;
