import {
  Column, CreateDateColumn, Entity,
  PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';

@Entity('exchangeRate')
export default class ExchangeRate {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column('decimal', { precision: 10, scale: 2 })
    amount!: number;

  @Column()
    description!: string;

  @Column('boolean', { default: false })
    active!: boolean;

  @CreateDateColumn()
    createdAt!: Date;

  @UpdateDateColumn()
    updatedAt!: Date;
}
