import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tblBlogList } from 'src/entity/tblBlogList';
import { tblImages } from 'src/entity/tblImage';
import { Repository } from 'typeorm';

interface ImageParams {
  image: Buffer;
}

@Injectable()
export class BlogServerService {

  constructor(
    @InjectRepository(tblBlogList)
    private blogRepository: Repository<tblBlogList>,

    @InjectRepository(tblImages)
    private imageRepository: Repository<tblImages>,
  ) { }

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
    let insertId = '';
    if (params.id) {
      const user = await this.blogRepository
        .createQueryBuilder("tblBlogList")
        .update(tblBlogList)
        .set(
          {
            userId: params.userId,
            abstract: params.abstract,
            title: params.title,
            content: params.content,
            logAdmin: params.logAdmin,
            logTime: params.logTime,
            show: params.show,
            classified: params.classified
          }
        )
        .where("id=:id", { id: params.id })
        .execute();
      insertId = params.id;
    } else {
      const user = await this.blogRepository
        .createQueryBuilder("tblBlogList")
        .insert()
        .into(tblBlogList)
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
    }
    return result;
  }

  async getBlogList(params): Promise<object> {
    const blogList = await this.blogRepository
      .createQueryBuilder("tblBlogList")
      .where('"userId" = :userId', { userId: params.user.userId })
      .getMany();
    const result = {
      'flag': true,
      'data': blogList,
    }
    return result;
  }

  async getOneById(params): Promise<object> {
    const blogList = await this.blogRepository
      .createQueryBuilder("tblBlogList")
      .where("id = :id", { id: params.id })
      .getOne();
    const result = {
      'flag': true,
      'data': blogList,
    }
    return result;
  }

  async delBlog(parsms): Promise<object> {
    const user = await this.blogRepository
      .createQueryBuilder("tblBlogList")
      .delete()
      .from(tblBlogList)
      .where("id = :id", { id: parsms.id })
      .execute();

    const result = {
      flag: true,
      msg: '删除成功',
    }
    return result;
  }

  async saveImage(params: ImageParams): Promise<number> {
    const user = await this.imageRepository
      .createQueryBuilder("tblImage")
      .insert()
      .into(tblImages)
      .values([
        {
          image: params.image,
        },
      ]).execute();
    const insertId = user.identifiers[0].id;
    return insertId;
  }

  async getImage(id: number) : Promise<Buffer> {
    return (await this.imageRepository.findOne(id)).image;
  }
}
