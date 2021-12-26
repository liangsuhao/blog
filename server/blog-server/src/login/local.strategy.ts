import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../entity/user';
import { LoginService } from './login.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly LoginService: LoginService) {
    super();
    this.LoginService = LoginService;
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.LoginService.validate(username, password);
    if (user) return user;
    else throw new UnauthorizedException('incorrect username or password');
  }
}