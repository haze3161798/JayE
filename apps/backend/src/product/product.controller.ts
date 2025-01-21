import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    const res = await this.productService.test();
    return res;
    // this.productService.connectDatabase();
  }
}
