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
Object.defineProperty(exports, "__esModule", { value: true });
exports.tblBlogList = void 0;
const typeorm_1 = require("typeorm");
let tblBlogList = class tblBlogList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], tblBlogList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], tblBlogList.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: null }),
    __metadata("design:type", String)
], tblBlogList.prototype, "abstract", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], tblBlogList.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: null }),
    __metadata("design:type", String)
], tblBlogList.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], tblBlogList.prototype, "logAdmin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], tblBlogList.prototype, "logTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], tblBlogList.prototype, "show", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: null }),
    __metadata("design:type", String)
], tblBlogList.prototype, "classified", void 0);
tblBlogList = __decorate([
    (0, typeorm_1.Entity)()
], tblBlogList);
exports.tblBlogList = tblBlogList;
//# sourceMappingURL=tblBlogList.js.map