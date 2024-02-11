import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders_products' })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  demand: number;
}
