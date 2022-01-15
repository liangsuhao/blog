import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tblBlogList } from 'src/entity/tblBlogList';
import { BlogServerController } from './blog-server.controller';
import { BlogServerService } from './blog-server.service';
import { LoginModule } from 'src/login/login.module';
import { tblImages } from 'src/entity/tblImage';

@Module({
  imports: [
    TypeOrmModule.forFeature([tblBlogList, tblImages]),
    LoginModule,
  ],
  providers: [BlogServerService],
  controllers: [BlogServerController],
})
export class BlogServerModule {}
