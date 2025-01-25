import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  createTime: Date;

  @Column({ type: 'datetime' })
  updateTime: Date;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  img: string;

  @Column({ type: 'text', comment: '商品描述', nullable: true })
  description: string;

  @Column({ type: 'int', default: 9999, comment: '商品價格' })
  price: number;
}
