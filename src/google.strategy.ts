// import { PassportStrategy } from "@nestjs/passport";
// import { Injectable } from "@nestjs/common";
// import { Strategy  } from 'passport-google-oauth20';
// import { VerifyCallback } from "passport-google-oauth20";

// @Injectable()

// export class GoogleStrategy extends PassportStrategy(Strategy, 'google'){
//     constructor(){
//         super({
//             clientID: '74727642738-a11gfan7nasf9jes4lsf0j4agalhbp96.apps.googleusercontent.com',
//             clientSecret: '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',
//             callBackURL: 'http://localhost:2000/auth/google/callback',
//             scope: ['email', 'profile']
//         });
//     }
//    async validate(accessToken: string, refreshToken:string, profile: any,
//     done: VerifyCallback):Promise <any> {
//         const { name, emails, photos } = profile
//         const user = {
//             email: emails[0].value,
//             firstName: name.givenName,
//             lastName: name.familyName,
//             picture: photos[0].value,
//             accessToken
//         }
//     done(null, user )
//    }
// }