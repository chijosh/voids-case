import { Module } from '@nestjs/common';
import { SupplyService } from './supply.service';
import { SupplyController } from './supply.controller';
import { SupplyEntity } from './entities/supply.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SupplyEntity])],
  controllers: [SupplyController],
  providers: [SupplyService],
})
export class SupplyModule {}
