import { Controller, Get, Post, Body, Put, Query, Delete, HttpException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './register.dto'
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() data: RegisterDto ) {
        const allAuth = await this.authService.checkAuthStatus(data.account);
        if (!allAuth) return await this.authService.register(data);
        throw new HttpException('User already exists', 422);
    }
}