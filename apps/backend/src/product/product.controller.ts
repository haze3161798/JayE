import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInsertData } from './types'
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
    // return res;
  }
}
