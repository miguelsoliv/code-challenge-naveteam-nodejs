import { Exclude } from 'class-transformer';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';

import Base from './Base';
import User from './User';

@Entity('navers')
class Naver extends Base {
  @Column('uuid')
  @Exclude()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;

  @Column('date')
  birthdate: Date;

  @Column('date')
  admission_date: Date;

  @Column()
  job_role: string;
}

export default Naver;
