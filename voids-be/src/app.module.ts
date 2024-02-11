import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplyModule } from './supply/supply.module';
import { ProductModule } from './product/product.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    SupplyModule,
    ProductModule,
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
