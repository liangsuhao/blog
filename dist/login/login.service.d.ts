import { JwtService } from '@nestjs/jwt';
import { User } from "../entity/user";
import { TokenEntity } from './token.entity';
export declare class LoginService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    findUser(userName: string): Promise<User>;
    loginin(): Promise<string>;
    validate(username: string, password: string): Promise<User>;
    login(user: User): Promise<TokenEntity>;
}
