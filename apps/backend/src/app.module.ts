import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { cwd } from 'node:process'
import { join } from 'node:path'
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '0000',
      database: 'node_ts',
      entities: [Product],
      synchronize: true,
    }),
    ProductModule,
    ConfigModule.forRoot({
      envFilePath: join(cwd(),'.env')
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
