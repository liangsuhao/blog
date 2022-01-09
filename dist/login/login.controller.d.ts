import { LoginService } from './login.service';
import { TokenEntity } from './token.entity';
export declare class LoginController {
    private readonly LoginService;
    constructor(LoginService: LoginService);
    loginin(request: any): Promise<TokenEntity>;
}
