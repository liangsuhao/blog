import { Controller,Param,Post,Query,Body,UseGuards,Request } from '@nestjs/common';
import { LoginService } from './login.service';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { TokenEntity } from './token.entity';
import { LocalStrategy } from './local.strategy';


@Controller('login')
export class LoginController {
  constructor(private readonly LoginService: LoginService) {
      this.LoginService = LoginService;
  }

  @Post("loginin")
  @UseGuards(AuthGuard('local'))
  async loginin( @Request() request ): Promise<TokenEntity>{
    return this.LoginService.login(request.user);
  }
}
