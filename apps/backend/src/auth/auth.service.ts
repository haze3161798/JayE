import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { Auth } from './auth.entity';
import { RegisterDto } from './register.dto';

@Injectable()
export class AuthService {
    constructor(private dataSource: DataSource) {}

    async register(data: RegisterDto) {
        return await this.dataSource.getRepository(Auth).save(data);
    }
    
    async checkAuthStatus(account: string) {
        const res =  await this.dataSource.getRepository(Auth).findOne({where: {account: account }});
        return Boolean(res);
      }
}