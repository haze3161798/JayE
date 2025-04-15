import { Controller, Get, Post, Body, Put, Query, Delete, UseInterceptors, UploadedFile, HttpException } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInsertData, ProductUpdateData } from './types'
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path'
import { v4 as uuid } from 'uuid'
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
async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() data: any) {
  console.log(data);
  
  try {
    const fileName = `${uuid()}.${file.originalname.split('.')[1]}`;
    console.log(fileName);
    
    const filePath = resolve(process.env.STORAGE_URL,'assets', fileName);
    await writeFile(filePath, file.buffer);
    const res = await this.productService.createProduct({ name: "無名稱",img: `/assets/${fileName}` });
  
    return {
      url: `/assets/${fileName}`,
      id: res.id
    };
  } catch (error) {
    console.log(error);
    throw new HttpException(error, 500);
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

