import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupplyService } from './supply.service';
import { UpdateResult, DeleteResult } from 'typeorm';
import { SupplyEntity } from './entities/supply.entity';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post()
  async create(@Body() supply: SupplyEntity): Promise<SupplyEntity> {
    return await this.supplyService.create(supply);
  }

  @Get()
  findAll() {
    return this.supplyService.findAll();
  }

  // @Get()
  // async getAll(): Promise<SupplyEntity[]> {
  //   return await this.supplyService.getAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<SupplyEntity> {
  //   return await this.supplyService.getOne(+id);
  // }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() supply: SupplyEntity,
  ): Promise<UpdateResult> {
    return await this.supplyService.update(+id, supply);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    return await this.supplyService.remove(+id);
  }
}
