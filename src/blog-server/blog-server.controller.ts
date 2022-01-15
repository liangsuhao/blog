import { Controller, Param, Post, Query, Body, UseGuards, Request, UseInterceptors, UploadedFile, Get, Res, Header } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';
import { AuthGuard } from '@nestjs/passport';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import * as moment from 'moment';
import { createWriteStream } from 'fs';
import {Response} from 'express';
import { Readable } from 'stream';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) { }
  url = '/upload/';

  @UseGuards(AuthGuard('jwt'))
  @Post("saveBlog")
  async getHello(@Request() req) {
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
  async getBlogs(@Request() req) {
    return this.BlogServerService.getBlogList(req);
  }

  @Post("getOne")
  async getOne(@Body() body) {
    return this.BlogServerService.getOneById(body);
  }

  @Post("delBlog")
  async delBlog(@Body() body) {
    return this.BlogServerService.delBlog(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post("uploadImg")
  @UseInterceptors(FileInterceptor('img'))
  async uploadImg(@UploadedFile() file: Express.Multer.File, @Request() req) {
    const id = await this.BlogServerService.saveImage({ image: file.buffer });
    const content = "/blog-server/images/"+id;
    return { flag: true, msg: '成功', content: content };
  }

  @Get('images/:id')
  @Header('Content-Type', 'image/png')
  async getImages(@Param('id') id: number, @Res() res: Response) {
    const image = await this.BlogServerService.getImage(id);
    const stream = new Readable();

    stream.push(image);
    stream.push(null);
    stream.pipe(res);
  }
}
