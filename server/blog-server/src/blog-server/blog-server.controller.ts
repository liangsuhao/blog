import { Controller,Param,Post,Query,Body } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) {}

  @Post(":id")
  async getHello( @Body() body )  {
    body.userId =  '0001';
    body.logAdmin = 'fdsfsaf';
    body.logTime = Math.floor(Date.now() / 1000);
    body.show = 1;
    return this.BlogServerService.saveBlog(body);
  }
}
