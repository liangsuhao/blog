import { Test, TestingModule } from '@nestjs/testing';
import { BlogServerController } from './blog-server.controller';

describe('BlogServerController', () => {
  let controller: BlogServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogServerController],
    }).compile();

    controller = module.get<BlogServerController>(BlogServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
