import { Exclude } from 'class-transformer';
import { Entity, Column } from 'typeorm';

import Base from './Base';

@Entity('users')
class User extends Base {
  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
}

export default User;
