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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServerController = void 0;
const common_1 = require("@nestjs/common");
const blog_server_service_1 = require("./blog-server.service");
const passport_1 = require("@nestjs/passport");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const moment = require("moment");
const fs_1 = require("fs");
let BlogServerController = class BlogServerController {
    constructor(BlogServerService) {
        this.BlogServerService = BlogServerService;
        this.url = '/upload/';
    }
    async getHello(req) {
        let body = req.body;
        console.log(req.user);
        body['userId'] = req.user.userId;
        body['logAdmin'] = req.user.userName;
        body['logTime'] = Math.floor(Date.now() / 1000);
        body['show'] = 1;
        return this.BlogServerService.saveBlog(body);
    }
    async getBlogs(req) {
        return this.BlogServerService.getBlogList(req);
    }
    async getOne(body) {
        return this.BlogServerService.getOneById(body);
    }
    async delBlog(body) {
        return this.BlogServerService.delBlog(body);
    }
    async uploadImg(file, req) {
        let fileName = req.user.userId.toString() + moment().format('YYYYMMDDHHmmss');
        const extra = file.originalname.split('.')[1];
        fileName = fileName + '.' + extra;
        const writeImage = (0, fs_1.createWriteStream)((0, path_1.join)(__dirname, '..', '../public/upload', `${fileName}`));
        writeImage.write(file.buffer);
        const content = this.url + fileName;
        return { 'flag': true, 'msg': '成功', 'content': content };
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("saveBlog"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogServerController.prototype, "getHello", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("getBlogs"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogServerController.prototype, "getBlogs", null);
__decorate([
    (0, common_1.Post)("getOne"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogServerController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)("delBlog"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BlogServerController.prototype, "delBlog", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)("uploadImg"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BlogServerController.prototype, "uploadImg", null);
BlogServerController = __decorate([
    (0, common_1.Controller)('blog-server'),
    __metadata("design:paramtypes", [blog_server_service_1.BlogServerService])
], BlogServerController);
exports.BlogServerController = BlogServerController;
//# sourceMappingURL=blog-server.controller.js.map