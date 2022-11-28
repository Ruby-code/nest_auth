import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './typeorm';


@Injectable()
export class AppService {
  constructor(@InjectRepository(User)
   private readonly userRepository: Repository<User>){}

  googleLogin(req){
    if(!req.user){
      return 'No user from google'
    }
    return{
      message: 'User Info from Google',
      user: req.user
    }
  }

 async create(data: any): Promise<User>{
  const user = this.userRepository.save(data);
  return user;
 }
}
