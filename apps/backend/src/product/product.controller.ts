import { Controller, Get, Post, Body, Put, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInsertData, ProductUpdateData } from './types'
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(@Query() query: Record<string, any>) {
    const res = await this.productService.getProductBy(query);
    return res;
  }

  @Post('create')
  async createProduct(@Body() data: ProductInsertData) {
    const res = await this.productService.createProduct(data);
    return res;
  }

  @Put('update')
  async updateProduct(@Body() data: ProductUpdateData) {
    const res = (await this.productService.updateProduct(data)).affected;
    return res;
  }
}
