import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/sevices/user.service';
import { comparePasswords } from 'src/utils/bcypt';

@Injectable()
export class AuthService {
    constructor(@Inject('USER_SERVICE') 
    private readonly userService: UserService){}

   async validateUser(username: string, password: string){
    console.log('Inside validateUser');
        const userDb = await this.userService.findUserByUsername(username);
        if(userDb){
            const matched = comparePasswords(password, userDb.password);
            if (matched){
            console.log('User Validation Success');
            return userDb; 
        }
        else{
            console.log('Passwords do not match');
            return null;
        } 
    }
        console.log('User Validation Failed');
        return null;
    } 
    

}
  