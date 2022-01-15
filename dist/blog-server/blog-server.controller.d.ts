/// <reference types="multer" />
import { BlogServerService } from './blog-server.service';
import { Response } from 'express';
export declare class BlogServerController {
    private readonly BlogServerService;
    constructor(BlogServerService: BlogServerService);
    url: string;
    getHello(req: any): Promise<object>;
    getBlogs(req: any): Promise<object>;
    getOne(body: any): Promise<object>;
    delBlog(body: any): Promise<object>;
    uploadImg(file: Express.Multer.File, req: any): Promise<{
        flag: boolean;
        msg: string;
        content: string;
    }>;
    getImages(id: number, res: Response): Promise<void>;
}
