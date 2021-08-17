import { Body, Controller, Post } from "@nestjs/common";
import { CreateTimeSetDto } from "../dto/createtimeset.ts.dto";
import { WorkDayService } from "../form-member.service";

@Controller('week-days')
export class WorkDayController {
  constructor(
    private readonly workDayService: WorkDayService) { }

  @Post('post')
  postTimeToDay(@Body() times: CreateTimeSetDto) {
    // return this.workDayService.insert(times);
  }

}