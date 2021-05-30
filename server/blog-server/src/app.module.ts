import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogServerController } from './blog-server/blog-server.controller';
import { BlogServerService } from './blog-server/blog-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { tblBlogList } from './entity/tblBlogList';
import { BlogServerModule } from './blog-server/blog-server.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'blog',
      entities: [User,tblBlogList],
      synchronize: true,
      autoLoadEntities: true,
      timezone: 'UTC',
      charset: 'utf8mb4'
    }),
    BlogServerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
