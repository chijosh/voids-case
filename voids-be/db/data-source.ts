import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();
export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  logging: false,
  synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();
export default dataSource;
