import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";


export class CreateUserDto{

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @Length(3, 20)
    @IsNotEmpty()
    username: string;

    @IsString()
    @Length(10, 20)
    @IsNotEmpty()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}