import { Test, TestingModule } from '@nestjs/testing';
import { BlogServerService } from './blog-server.service';

describe('BlogServerService', () => {
  let service: BlogServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogServerService],
    }).compile();

    service = module.get<BlogServerService>(BlogServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
