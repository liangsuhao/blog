import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogServerController } from './blog-server/blog-server.controller';
import { BlogServerService } from './blog-server/blog-server.service';

@Module({
  imports: [],
  controllers: [AppController, BlogServerController],
  providers: [AppService, BlogServerService],
})
export class AppModule {}
