import { ProductsEntity } from '../../product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'supply' })
export class SupplyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @Column()
  inventory: number;

  @Column()
  productId: number;

  @CreateDateColumn()
  createdAt: Timestamp;

  @UpdateDateColumn()
  updatedAt: Timestamp;

  @OneToMany(() => ProductsEntity, (op) => op.name, { cascade: true })
  products: ProductsEntity[];
}
