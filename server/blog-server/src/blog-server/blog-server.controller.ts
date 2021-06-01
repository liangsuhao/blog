import { Controller,Param,Post,Query,Body } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) {}

  @Post("saveBlog")
  async getHello( @Body() body )  {
    body.userId =  '0001';
    body.logAdmin = 'fdsfsaf';
    body.logTime = Math.floor(Date.now() / 1000);
    body.show = 1;
    return this.BlogServerService.saveBlog(body);
  }

  @Post("getBlogs")
  async getBlogs( @Body() body ) {
    return this.BlogServerService.getBlogList(body);
  }

  @Post("getOne")
  async getOne( @Body() body) {
    return this.BlogServerService.getOneById(body);
  }

  @Post("delBlog")
  async delBlog( @Body() body) {
    return this.BlogServerService.delBlog(body);
  }
}
