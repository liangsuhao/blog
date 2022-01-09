import { BlogServerService } from './blog-server.service';
export declare class BlogServerController {
    private readonly BlogServerService;
    constructor(BlogServerService: BlogServerService);
    url: string;
    getHello(req: any): Promise<object>;
    getBlogs(req: any): Promise<object>;
    getOne(body: any): Promise<object>;
    delBlog(body: any): Promise<object>;
    uploadImg(file: any, req: any): Promise<{
        flag: boolean;
        msg: string;
        content: string;
    }>;
}
