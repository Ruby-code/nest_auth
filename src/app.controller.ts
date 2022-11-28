import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import * as bcryt from 'bcrypt';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    
  } 

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
   googleAuthRedirect(@Req() req){
    return this.appService.googleLogin(req)

   }

   @Post('register')
   async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string
      ){
     const hashedPassword = await bcryt.hash(password, 12);
     return this.appService.create({
      name,
      email,
      password: hashedPassword
     })
   } 
   //npm install --save @nestjs/typeorm typeorm mysql2
   // npm i --save-dev @types/passport-local
    // npm i bcrypt
    // npm i -d @types/bcrypt
    //npm install --save @nestjs/jwt passport-jwt
  //npm install --save-dev @types/passport-jwt
}
