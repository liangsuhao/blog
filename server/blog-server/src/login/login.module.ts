import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { LocalStrategy } from './local.strategy';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtContants } from './jwt.contants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  providers: [LoginService, LocalStrategy,JwtStrategy],
  controllers: [LoginController],
  imports: [
    PassportModule,TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: jwtContants.secret,
      signOptions: { expiresIn: '2 days' },
    }),
  ]
})
export class LoginModule {}
