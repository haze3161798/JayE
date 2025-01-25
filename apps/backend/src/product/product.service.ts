import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Product } from './product.entity';
import { ProductInsertData, ProductUpdateData } from './types';
@Injectable()
export class ProductService {
  constructor(private dataSource: DataSource) {}
  async connectDatabase() {
    // const queryRunner = this.dataSource.createQueryRunner();
    // await queryRunner.connect();
    // await queryRunner.startTransaction();
  }
  async getProductBy(data) {
    
    if (JSON.stringify(data) === '{}') {
      return await this.dataSource.getRepository(Product).find();
    }

    const returnData = await this.dataSource.getRepository(Product).findOne({ where: data })
    if (returnData) {
      return returnData
    }

    return await this.dataSource.getRepository(Product).find();
  }

  async createProduct(data: ProductInsertData) {
    console.log(data);
    return await this.dataSource.getRepository(Product).save(data);
  }

  async updateProduct(ProductUpdateData: ProductUpdateData) {
    return await this.dataSource.getRepository(Product).update({ id: ProductUpdateData.id }, ProductUpdateData);
  }
}
