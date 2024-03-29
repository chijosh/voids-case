import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplyEntity } from './entities/supply.entity';

@Injectable()
export class SupplyService {
  constructor(
    @InjectRepository(SupplyEntity)
    private readonly SupplyRepository: Repository<SupplyEntity>,
  ) {}

  private supplyData: any[] = [
    {
      id: 1,
      location: 'Hamburg',
      inventory: 100,
      productId: 1,
      products: [
        { id: 1, name: 'Reading glass', demand: 200 },
        { id: 2, name: 'VR glass', demand: 150 },
      ],
      weatherCondition: 'good',
      plannedQuantity: [
        { productId: 1, quantity: 30 },
        { productId: 2, quantity: 80 },
      ],
    },
    {
      id: 2,
      location: 'Munich',
      inventory: 150,
      productId: 2,
      products: [
        { id: 1, name: 'Reading glass', demand: 200 },
        { id: 2, name: 'VR glass', demand: 150 },
      ],
      weatherCondition: 'bad',
      plannedQuantity: [{ productId: 1, quantity: 30 }],
    },
  ];

  async create(supply: SupplyEntity): Promise<SupplyEntity> {
    return await this.SupplyRepository.create(supply);
  }

  findAll() {
    return this.supplyData;
  }

  // async getAll(): Promise<SupplyEntity[]> {
  //   return await this.SupplyRepository.find();
  // }

  // async getOne(id: number): Promise<SupplyEntity> {
  //   // return await this.SupplyRepository.findOne(id);
  // }

  async update(id: number, supply: SupplyEntity): Promise<UpdateResult> {
    return await this.SupplyRepository.update(id, supply);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.SupplyRepository.delete(id);
  }
}
