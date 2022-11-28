import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm/user.entity';
import { SerializedUser, User } from '../types';
import { encodePassword } from 'src/utils/bcypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    ){}
   private users: User[] =[];
    
   getUsers(){
        return this.users.map((user) => new SerializedUser(user)); 
      }

      getUserById(id: number){
        return  this.users.find((user) => user.id === id);
     }
  
     getUserByUsername(username: string){
      return this.users.find((user) => user.username === username);
     }
    
    createUser(createUserDto: CreateUserDto){
      const password = encodePassword(createUserDto.password);
      console.log(password);
        const newUser = this.userRepository.create({...createUserDto, password});
        return this.userRepository.save(newUser); 
      }
    
    findUserByUsername(username: string){
        return this.userRepository.findOneBy({ username})
    }

    findUserById(id: number){
      return this.userRepository.findOneBy({id});
    }


// async findByNames(userName: string): Promise<CreateUserDto> {
//     if (userName) {
    // return await this.userRepository.findBy((userArray: { name: string; }) => userArray.name === userName);
  //  }

//     }
// async getByEmail(email: string): Promise<CreateUserDto>{
//     return await this.userRepository.findOne({
//         where: {
//           email: email,
//         }
//       });
//   }

//     }
//     findByEmails(userName: string): any[] {
//         if ( userName) {
//         return this.userArray.filter(userArray => userArray.email === userName);
//         }
//     }
//             findByNumber(userName: Number){
//             return this.userArray.find((element) => {
//                 return element.phone_number === userName;
//             });

//         }
//         findByNumbers(userName: string): any[] {
//             if ( userName) {
//             return this.userArray.filter(userArray => userArray.numbers === userName);
//             }
//         }
        
//         addValues(){

//         }

//     deleteByName(userName: string){
//       this.userArray =  this.userArray.filter((element) =>{
//             return element.name != userName;
//         });
   // }


// store(userBody: usersDto){
//     this.userArray.push(userBody);
//     return this.findAll();
//     }
}
