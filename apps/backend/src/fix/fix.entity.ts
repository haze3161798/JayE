import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fix {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  createTime: Date;

  @Column({ type: 'datetime' })
  updateTime: Date;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  otherContact: string;

  @Column({ type: 'text' })
  detail: string;
}
