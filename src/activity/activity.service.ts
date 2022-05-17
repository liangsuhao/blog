import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { tblActivity } from 'src/entity/tblActivity';

@Injectable()
export class ActivityService {

  constructor(
    @InjectRepository(tblActivity)
    private tblActivity: Repository<tblActivity>,

  ) { }

  async getAllActivity(params) : Promise<object> {
    const activities = await this.tblActivity
      .createQueryBuilder("tblActivity")
      .getMany();
    
    const result = {
      'flag': true,
      'data': activities,
    }
    return result;
  }
}
