import User from '../../models/User';
import ICreateUserDTO from '../../useCases/CreateUser/ICreateUserDTO';
import IUsersRepository from './IUsersRepository';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  private counter = 1;

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = new User();
    Object.assign(user, { id: this.counter }, data);

    this.users.push(user);
    this.counter += 1;

    return user;
  }

  public async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}

export default FakeUsersRepository;
