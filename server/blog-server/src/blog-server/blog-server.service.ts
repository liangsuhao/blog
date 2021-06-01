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
    console.log(params);
    if(params.id){
    const user = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .update(tblBlogList)
    .set(
      { userId: params.userId,
        abstract: params.abstract,
        title:params.title,
        content:params.content,
        logAdmin:params.logAdmin,
        logTime:params.logTime,
        show:params.show,
        classified:params.classified }
      )
      .where("id=:id", { id:params.id})
      .execute();
    } else {
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
      ]).execute();
    }

    var result = {
      flag: true,
      msg: '保存成功',
    }
    return result;
  }

  async getBlogList(params): Promise<object> {
    const blogList = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .where("userId = :userId", { userId: params.userId } )
    .getMany();
     var result = {
      'flag' : true,
      'data' : blogList,
    }
    return result;
  }

  async getOneById(params): Promise<object> {
    const blogList = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .where("id = :id", { id: params.id } )
    .getOne();
     var result = {
      'flag' : true,
      'data' : blogList,
    }
    return result;
  }

  async delBlog(parsms): Promise<object> {
    const user = await getRepository(tblBlogList)
    .createQueryBuilder("tblBlogList")
    .delete()
    .from(tblBlogList)
    .where("id = :id", { id: parsms.id })
    .execute();

    var result = {
      flag: true,
      msg: '删除成功',
    }
    return result;
  }
}
