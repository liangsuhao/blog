import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ActivityService } from './activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly ActivityService: ActivityService) {

  }
  
  @UseGuards(AuthGuard('jwt'))
  @Post("getAllActivity")
  async getAllActivity(@Request() req) {
    let body = req.body;
    return this.ActivityService.getAllActivity(body);
  }
}
