import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';
import { HttpExceptionFilter } from './http-exception.filter';

const port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useStaticAssets(join(__dirname, '..', 'app/dist'),{
    prefix: '/',   //设置虚拟路径
  });
  app.useStaticAssets(join(__dirname, '..', 'public/upload'),{
    prefix: '/upload',   //设置虚拟路径
  });
  await app.listen(port);
}
bootstrap();
