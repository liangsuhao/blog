import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Entity, getRepository, Repository } from 'typeorm';
import { User } from "../entity/user";
import { TokenEntity } from './token.entity';

@Injectable()
export class LoginService {
    private readonly jwtService: JwtService;
    constructor(jwtService: JwtService) {
        this.jwtService = jwtService;
    }

    async findUser(userName: string): Promise<User> {
        const userInfo = await getRepository(User)
        .createQueryBuilder("User")
        .where('"userName" = :userName', { userName: userName } )
        .getOne();

        return userInfo;
    }

    async loginin (): Promise<string> {
        return '123';
    }

    async validate(username: string, password: string): Promise<User> {
        const user = await this.findUser(username);
        if (user && user.password === password) {
          const { password, ...userInfo } = user;
          return user;
        } else {
          return null;
        }
    }

    /**
    * user login
    * @param user
    */
    async login(user: User): Promise<TokenEntity> {
        const { id, userName } = user;
        return {
            token: this.jwtService.sign({ username:userName, sub: id }),
        };
    }
}
