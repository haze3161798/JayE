import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  createTime: Date;

  @Column({ type: 'datetime' })
  updateTime: Date;

  @Column({ type: 'varchar', length: 255 })
  orderStatus: string;

  @Column({ type: 'varchar', length: 255 })
  orderNumber: string;

  @Column({ type: 'int', comment: '訂單id' })
  productId: number;

  @Column({
    type: 'int',
    comment: '訂單狀態 0=未讀 1=已讀 2=進行中 3=出貨中 4=已完成',
  })
  status: number;
}
