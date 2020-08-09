import AppError from '../../errors/AppError';
import INaversRepository from '../../repositories/navers/INaversRepository';
import IDeleteNaverDTO from './IDeleteNaverDTO';

// TODO: create test
class DeleteNaverService {
  constructor(private naversRepository: INaversRepository) {}

  async execute({ naver_id, user_id }: IDeleteNaverDTO): Promise<void> {
    const naver = await this.naversRepository.findById(naver_id);

    if (!naver) {
      throw new AppError('Naver not found', 404);
    }

    if (naver.user_id !== user_id) {
      throw new AppError('This naver is not related to you', 401);
    }

    await this.naversRepository.delete(naver_id);
  }
}

export default DeleteNaverService;
