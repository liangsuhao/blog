"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const user_1 = require("../entity/user");
const local_strategy_1 = require("./local.strategy");
const login_controller_1 = require("./login.controller");
const login_service_1 = require("./login.service");
const jwt_1 = require("@nestjs/jwt");
const jwt_contants_1 = require("./jwt.contants");
const jwt_strategy_1 = require("./jwt.strategy");
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    (0, common_1.Module)({
        providers: [login_service_1.LoginService, local_strategy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        controllers: [login_controller_1.LoginController],
        imports: [
            passport_1.PassportModule, typeorm_1.TypeOrmModule.forFeature([user_1.User]),
            jwt_1.JwtModule.register({
                secret: jwt_contants_1.jwtContants.secret,
                signOptions: { expiresIn: '2 days' },
            }),
        ]
    })
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map