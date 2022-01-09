import { Strategy } from 'passport-local';
import { User } from '../entity/user';
import { LoginService } from './login.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly LoginService;
    constructor(LoginService: LoginService);
    validate(username: string, password: string): Promise<User>;
}
export {};
