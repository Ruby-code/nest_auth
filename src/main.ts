import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { TypeormStore } from 'connect-typeorm';
import { SessionEntity } from './typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 
  app.use(
    session({
    name: 'NESTJS_SESSION_ID',
    secret: 'qwertyuiop',
    resave: false,
    saveUninitialized: false,
    cookie:{
      maxAge: 6000,
    },
    // store: new TypeormStore(),
  }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(2000);
}
bootstrap(); 


