import { Exclude } from 'class-transformer';
import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import Base from './Base';
import User from './User';

@Entity('projects')
class Project extends Base {
  @Column('int4')
  @Exclude()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column()
  name: string;
}

export default Project;
