import { Controller, Get, Post, Req, Request, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';
// import { Request } from 'express';

@Controller('auth')  
export class AuthController {
    @UseGuards(AuthGuard('local'))
    @Post('login')
   async login(@Request() req){}

    @Get('')
    async getAuthSession(@Session() session: Record<string, any>){
        console.log(session);
        console.log(session.id);
        session.authenticated = true;
        return session;
    }

    // @UseGuards(AuthenticatedGuard)
    // @Get('status')
    // async getAuthStatus(@Req() req:Request){
    //     return req.user;
    // }
}
