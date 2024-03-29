import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogServerController } from './blog-server/blog-server.controller';
import { BlogServerService } from './blog-server/blog-server.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user';
import { tblBlogList } from './entity/tblBlogList';
import { tblImages } from './entity/tblImage';
import { BlogServerModule } from './blog-server/blog-server.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    //   // type: 'mysql',
    //   // host: 'localhost',
    //   // port: 3306,
    //   // username: 'root',
    //   // password: '123456',
    //   // database: 'blog',
    //   entities: [User,tblBlogList],
    //   synchronize: true,
    //   autoLoadEntities: true,
    //   // timezone: 'UTC',
    //   // charset: 'utf8mb4'
    // }),
     TypeOrmModule.forRoot({
      type: 'postgres',
      // url: process.env.DATABASE_URL,
      url: 'postgres://bfuqyzuonbmsns:d61ac3ecf9846114cab1edce8e01266d4a4f7699257d7f43aef52827b9911f42@ec2-34-205-46-149.compute-1.amazonaws.com:5432/demcnvk1heqfqr',
      entities: [User,tblBlogList,tblImages],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false
      },
      autoLoadEntities: true,
    }),
    BlogServerModule,
    LoginModule,
    ActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
