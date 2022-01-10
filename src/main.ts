import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'app/dist'),{
    prefix: '/',   //设置虚拟路径
  });
  app.useStaticAssets(join(__dirname, '..', 'public/upload'),{
    prefix: '/upload',   //设置虚拟路径
  });
  await app.listen(3000);
}
bootstrap();