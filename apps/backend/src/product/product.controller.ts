import { Controller, Get, Post, Body, Put, Query, Delete, UseInterceptors, UploadedFile, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInsertData, ProductUpdateData } from './types'
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile, rm } from 'node:fs/promises';
import { cwd } from 'node:process'
import { join } from 'node:path'
@Controller('api/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts(@Query() query: Record<string, unknown>) {
    const res = await this.productService.getProductBy(query);
    return res;
  }

  @Post('create')
  async createProduct(@Body() data: ProductInsertData) {
    const res = await this.productService.createProduct(data);
    return res;
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      await writeFile(join(cwd(), 'assets', `${new Date().getTime()}_${file.originalname}`), file.buffer);
      return `assets/${new Date().getTime()}_${file.originalname}`
    } catch (error) {
      console.log(error);
      
      throw new HttpException( error, 500 )
    }
  }

  @Put('update')
  async updateProduct(@Body() data: ProductUpdateData) {
    const res = (await this.productService.updateProduct(data)).affected;
    return res;
  }

  @Delete('delete')
  async deleteProduct(@Body() data: number) {
    const res = (await this.productService.deleteProduct(data)).affected;
    return res;
  }


}

