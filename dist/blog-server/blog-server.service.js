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
exports.BlogServerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tblBlogList_1 = require("../entity/tblBlogList");
const tblImage_1 = require("../entity/tblImage");
const typeorm_2 = require("typeorm");
let BlogServerService = class BlogServerService {
    constructor(blogRepository, imageRepository) {
        this.blogRepository = blogRepository;
        this.imageRepository = imageRepository;
    }
    findAll() {
        return this.blogRepository.find();
    }
    findOne(id) {
        return this.blogRepository.findOne(id);
    }
    async remove(id) {
        await this.blogRepository.delete(id);
    }
    async saveBlog(params) {
        let insertId = '';
        if (params.id) {
            const user = await this.blogRepository
                .createQueryBuilder("tblBlogList")
                .update(tblBlogList_1.tblBlogList)
                .set({
                userId: params.userId,
                abstract: params.abstract,
                title: params.title,
                content: params.content,
                logAdmin: params.logAdmin,
                logTime: params.logTime,
                show: params.show,
                classified: params.classified
            })
                .where("id=:id", { id: params.id })
                .execute();
            insertId = params.id;
        }
        else {
            const user = await this.blogRepository
                .createQueryBuilder("tblBlogList")
                .insert()
                .into(tblBlogList_1.tblBlogList)
                .values([
                {
                    userId: params.userId,
                    abstract: params.abstract,
                    title: params.title,
                    content: params.content,
                    logAdmin: params.logAdmin,
                    logTime: params.logTime,
                    show: params.show,
                    classified: params.classified
                },
            ]).execute();
            insertId = user.identifiers[0].id;
        }
        const result = {
            flag: true,
            msg: '保存成功',
            id: insertId,
        };
        return result;
    }
    async getBlogList(params) {
        const blogList = await this.blogRepository
            .createQueryBuilder("tblBlogList")
            .where('"userId" = :userId', { userId: params.user.userId })
            .getMany();
        const result = {
            'flag': true,
            'data': blogList,
        };
        return result;
    }
    async getOneById(params) {
        const blogList = await this.blogRepository
            .createQueryBuilder("tblBlogList")
            .where("id = :id", { id: params.id })
            .getOne();
        const result = {
            'flag': true,
            'data': blogList,
        };
        return result;
    }
    async delBlog(parsms) {
        const user = await this.blogRepository
            .createQueryBuilder("tblBlogList")
            .delete()
            .from(tblBlogList_1.tblBlogList)
            .where("id = :id", { id: parsms.id })
            .execute();
        const result = {
            flag: true,
            msg: '删除成功',
        };
        return result;
    }
    async saveImage(params) {
        const user = await this.imageRepository
            .createQueryBuilder("tblImage")
            .insert()
            .into(tblImage_1.tblImages)
            .values([
            {
                image: params.image,
            },
        ]).execute();
        const insertId = user.identifiers[0].id;
        return insertId;
    }
    async getImage(id) {
        return (await this.imageRepository.findOne(id)).image;
    }
};
BlogServerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tblBlogList_1.tblBlogList)),
    __param(1, (0, typeorm_1.InjectRepository)(tblImage_1.tblImages)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BlogServerService);
exports.BlogServerService = BlogServerService;
//# sourceMappingURL=blog-server.service.js.map