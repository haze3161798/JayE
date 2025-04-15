import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import { AppModule } from './app.module';
import { join } from 'path'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.use('/assets', express.static(join(process.env.STORAGE_URL, 'assets')))
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
