import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { User } from "src/typeorm/user.entity";
import { UserService } from "src/user/sevices/user.service";

export class SessionSerilizer extends PassportSerializer{
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService){
        super();
    }

    serializeUser(user: User, done: (err, user: User) => void) {
        console.log('Serialized User');
        done(null, user);
    }

    async deserializeUser(user: User, done: (err, user: User) => void) {
        console.log('DeSerialized User'); 
        const userDB = await this.userService.findUserById(user.id); 
        return userDB ? done(null, userDB) : done(null, null);
    }
}