import { Controller,Post } from '@nestjs/common';
import { BlogServerService } from './blog-server.service';


@Controller('blog-server')
export class BlogServerController {
  constructor(private readonly BlogServerService: BlogServerService) {}

  @Post("getHello")
  getHello(): object {
    var params = {};
    var result = this.BlogServerService.saveBlog(params);
    return result;
  }
}
