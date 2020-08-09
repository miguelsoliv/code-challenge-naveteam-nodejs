import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

import Naver from './Naver';
import Project from './Project';

@Entity('navers_projects')
class NaverProject {
  @PrimaryColumn('int4')
  naver_id: number;

  @ManyToOne(() => Naver)
  @JoinColumn({ name: 'naver_id' })
  naver?: Naver;

  @PrimaryColumn('int4')
  project_id: number;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project?: Project;
}

export default NaverProject;
