import User from '../../models/User';
import ICreateUserDTO from '../../useCases/CreateUser/ICreateUserDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}
