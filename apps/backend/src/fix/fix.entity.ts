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

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '其他聯絡方式',
    name: 'other_contact',
  })
  otherContact: string;

  @Column({ type: 'text', comment: '詳細狀況' })
  detail: string;
}
