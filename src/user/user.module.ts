import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { UserService } from './sevices/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [
  {
    provide: 'USER_SERVICE',
    useClass: UserService,
  }
]
})
export class UserModule {}
