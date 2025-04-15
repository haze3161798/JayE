import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    account: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    userName: string;

    @CreateDateColumn({ type: 'datetime' })
    createTime: Date;

    @UpdateDateColumn({ type: 'datetime' })
    updateTime: Date;

    @Column({ type: 'datetime', nullable: true })
    DeleteAt: Date;
}