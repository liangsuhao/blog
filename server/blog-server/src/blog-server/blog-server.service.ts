import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogServerService {
  saveBlog(params): object{

    var result = {
      'falg':true,
      'msg':'保存成功'
    }
    return result;
  }
}
