import { Controller,Param,Post,Query,Body, UseGuards,Request } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';
import { AuthGuard } from '@nestjs/passport';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post("saveBlog")
  async getHello( @Request() req )  {
    let body = req.body;
    console.log(req.user)
    body['userId'] = req.user.userId;
    body['logAdmin'] = req.user.userName;
    body['logTime'] = Math.floor(Date.now() / 1000);
    body['show'] = 1;
    return this.BlogServerService.saveBlog(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post("getBlogs")
  async getBlogs( @Request() req ) {
    return this.BlogServerService.getBlogList(req);
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
