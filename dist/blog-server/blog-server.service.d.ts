/// <reference types="node" />
import { tblBlogList } from 'src/entity/tblBlogList';
import { tblImages } from 'src/entity/tblImage';
import { Repository } from 'typeorm';
interface ImageParams {
    image: Buffer;
}
export declare class BlogServerService {
    private blogRepository;
    private imageRepository;
    constructor(blogRepository: Repository<tblBlogList>, imageRepository: Repository<tblImages>);
    findAll(): Promise<tblBlogList[]>;
    findOne(id: string): Promise<tblBlogList>;
    remove(id: string): Promise<void>;
    saveBlog(params: any): Promise<object>;
    getBlogList(params: any): Promise<object>;
    getOneById(params: any): Promise<object>;
    delBlog(parsms: any): Promise<object>;
    saveImage(params: ImageParams): Promise<number>;
    getImage(id: number): Promise<Buffer>;
}
export {};
