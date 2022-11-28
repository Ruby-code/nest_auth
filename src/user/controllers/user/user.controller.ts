import { Body, ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, NotFoundException, Param, ParseIntPipe, Post, UseFilters, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthenticatedGuard } from 'src/auth/utils/LocalGuard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserNotFoundException } from 'src/user/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/user/filtes/HttpException.filter';
import { UserService } from 'src/user/sevices/user.service';
import { SerializedUser } from 'src/user/types';

@Controller('user')
export class UserController {
   constructor(@Inject('USER_SERVICE') private readonly userService: UserService){}

   @UseGuards(AuthenticatedGuard)
   @UseInterceptors(ClassSerializerInterceptor)
   @Get('')
   getUsers(){
    return this.userService.getUsers();
   } 

   @UseInterceptors(ClassSerializerInterceptor)
   @Get('/username/:username')
   getByUsername(@Param('username') username: string){
    const user = this.userService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
   }

   @UseInterceptors(ClassSerializerInterceptor)
   @UseFilters(HttpExceptionFilter)
   @Get('id/:id')
   getById(@Param('id', ParseIntPipe) id: number){
      const user =this.userService.getUserById(id);
      if(user) return new SerializedUser(user);
      else {
         throw new UserNotFoundException()
      }
   }

   @Post('create')
   @UsePipes(ValidationPipe)
   creatUser(@Body() createUserDto: CreateUserDto){
      return this.userService.createUser(createUserDto)

   }
//    @Get('username')
//    getUsername(@Param('username') data: string){
//     const username = this.userService.getUserByUsername(data);
//     if(!username){
//         throw new NotFoundException("User Not Found");
//     }
//     return username;
//    }

//    @Get('id')
//    getId(@Param('id') data: string){
//     const id = this.userService.getUserByUsername(data);
//     if(!id){
//         throw new NotFoundException("Id Not Found");
//     }
//     return id;
//    }

//    @Post()
//    async createUsers(@Body() reqUser: CreateUserDto){
//     const user= await this.userService.createUser(reqUser)
//     return{
//         statusCode: HttpStatus.OK,
//         message: "User created successfully",
//       }

 //  }
}
