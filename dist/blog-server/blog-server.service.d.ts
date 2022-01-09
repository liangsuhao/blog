import { tblBlogList } from 'src/entity/tblBlogList';
import { Repository } from 'typeorm';
export declare class BlogServerService {
    private blogRepository;
    constructor(blogRepository: Repository<tblBlogList>);
    findAll(): Promise<tblBlogList[]>;
    findOne(id: string): Promise<tblBlogList>;
    remove(id: string): Promise<void>;
    saveBlog(params: any): Promise<object>;
    getBlogList(params: any): Promise<object>;
    getOneById(params: any): Promise<object>;
    delBlog(parsms: any): Promise<object>;
    uploadImg(params: any): Promise<object>;
}
