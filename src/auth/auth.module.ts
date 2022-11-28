import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { serializeUser } from 'passport';
import { User } from 'src/typeorm';
import { UserService } from 'src/user/sevices/user.service';
import { SerializedUser } from 'src/user/types';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './sevices/auth/auth.service';
import { LocalStrategy } from './utils/localStrategy';
import { SessionSerilizer } from './utils/SessionSerializer';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    {
    provide: 'AUTH_SERVICE',
    useClass: AuthService,
    },
    {
    provide: 'USER_SERVICE',
    useClass: UserService,
     },
    LocalStrategy, 
    SessionSerilizer,
  
    
  ],

})
export class AuthModule {}


// npm install passport-local
// npm i --save-dev @types/passport-local