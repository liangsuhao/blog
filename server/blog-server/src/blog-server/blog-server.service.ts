import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tblBlogList } from 'src/entity/tblBlogList';
import { Repository } from 'typeorm';
import {getRepository} from "typeorm";

@Injectable()
export class BlogServerService {

  constructor(
    @InjectRepository(tblBlogList)
    private blogRepository: Repository<tblBlogList>
  ) {}

  findAll(): Promise<tblBlogList[]> {
    return this.blogRepository.find();
  }

  findOne(id: string): Promise<tblBlogList> {
    return this.blogRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.blogRepository.delete(id);
  }

  async saveBlog(params): Promise<object> {
    const user = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .insert()
    .into(tblBlogList)
    .values([
        { userId: params.userId,
          abstract: params.abstract,
          title:params.title,
          content:params.content,
          logAdmin:params.logAdmin,
          logTime:params.logTime,
          show:params.show,
          classified:params.classified },
     ])
     .execute();

    var result = {
      flag: true,
      msg: '保存成功',
    }
    return result;
  }

  async getBlogList(params): Promise<object> {
    const blogList = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .where("user.id = :id", { id: params.user} )
    .getMany();
     var result = {
      'flag' : true,
      'data' : blogList,
    }
    return result;
  }
}
