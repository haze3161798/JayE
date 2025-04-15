import { IsNotEmpty, IsByteLength } from "class-validator";

export class RegisterDto {
    @IsByteLength(4, Infinity ,{ message: 'account is too short' })
    @IsNotEmpty({ message: 'account is empty' })
    account: string;
    @IsNotEmpty({ message: 'password is empty' })
    password: string;
    
    userName?: string
}