import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateNaversProjects1596954676610
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'navers_projects',
        columns: [
          {
            name: 'naver_id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'project_id',
            type: 'serial',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['naver_id'],
            referencedTableName: 'navers',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            columnNames: ['project_id'],
            referencedTableName: 'projects',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('navers_projects');
  }
}
