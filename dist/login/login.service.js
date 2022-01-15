"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("typeorm");
const user_1 = require("../entity/user");
let LoginService = class LoginService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async findUser(userName) {
        const userInfo = await (0, typeorm_1.getRepository)(user_1.User)
            .createQueryBuilder("User")
            .where('"userName" = :userName', { userName: userName })
            .getOne();
        return userInfo;
    }
    async loginin() {
        return '123';
    }
    async validate(username, password) {
        const user = await this.findUser(username);
        if (user && user.password === password) {
            const { password } = user, userInfo = __rest(user, ["password"]);
            return user;
        }
        else {
            return null;
        }
    }
    async login(user) {
        const { id, userName } = user;
        return {
            token: this.jwtService.sign({ username: userName, sub: id }),
        };
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map