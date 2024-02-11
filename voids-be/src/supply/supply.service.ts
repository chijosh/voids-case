import { Injectable } from '@nestjs/common';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';

@Injectable()
export class SupplyService {
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

  create(createSupplyDto: CreateSupplyDto) {
    return 'This action adds a new supply';
  }

  findAll() {
    return this.supplyData;
  }

  findOne(id: number) {
    return `This action returns a #${id} supply`;
  }

  update(id: number, updateSupplyDto: UpdateSupplyDto) {
    return `This action updates a #${id} supply`;
  }

  remove(id: number) {
    return `This action removes a #${id} supply`;
  }
}
