import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
// import { GoogleStrategy } from './google.strategy';
import entities, { User } from './typeorm';
import { UserModule } from './user/user.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '',
    database: 'auth_db',
    entities: entities,
    // autoLoadEntities: true,
    synchronize: true,
  }), 
  TypeOrmModule.forFeature([(User)]), 
  CustomersModule, 
  UserModule, 
  AuthModule,
  PassportModule.register({session: true,
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
