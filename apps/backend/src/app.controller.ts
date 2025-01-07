import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    // return this.appService.getHello();
    return { HelloWorld: 'Hello World!123456' };
  }
  @HttpCode(200)
  @Get('/test')
  getTest(): object {
    return { HelloWorld: 'Hello test' };
  }
  @Post('/testPost')
  create(@Body() data) {
    if (data.aaa) {
      return data.aaa;
    }
    return 'no data';
  }
}
