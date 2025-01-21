import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(private dataSource: DataSource) {}
  async connectDatabase() {
    // const queryRunner = this.dataSource.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
  }
  async test() {
    return await this.dataSource.getRepository(Product).findOne({
      where: { id: 2 },
    });
  }
}
