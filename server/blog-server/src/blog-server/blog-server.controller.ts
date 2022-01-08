import { Controller,Param,Post,Query,Body, UseGuards,Request, UseInterceptors, UploadedFile } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';
import { AuthGuard } from '@nestjs/passport';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import * as moment from 'moment';
import { createWriteStream } from 'fs';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) {}
  url = 'http://localhost:3000/upload/';

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

  @UseGuards(AuthGuard('jwt'))
  @Post("uploadImg")
  @UseInterceptors(FileInterceptor('img'))
  async uploadImg( @UploadedFile() file,@Request() req) {
    let fileName = req.user.userId.toString() + moment().format('YYYYMMDDHHmmss'); //用用户id和当前时间戳给图片命名
    const extra = file.originalname.split('.')[1];
    fileName = fileName+'.'+extra;
    const writeImage = createWriteStream(join(__dirname,'..','../public/upload', `${fileName}`))
    writeImage.write(file.buffer);
    const content = this.url + fileName;
    return {'flag':true,'msg':'成功','content':content};
  }
}
