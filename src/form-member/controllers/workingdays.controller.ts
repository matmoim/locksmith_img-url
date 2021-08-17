import { BadRequestException, Body, Controller, Param, Post } from "@nestjs/common";
import { CreateWorkingDaysDto } from "../dto/create-working-days.dto";
import { WorkingDayService } from "../services/working-days.service";

@Controller('week-days')
export class WorkDayController {
  constructor(
    private readonly workDayService: WorkingDayService) { }

  @Post('/:requestId')
  async postTimeToDay(
    @Body() workingDays: CreateWorkingDaysDto,
    @Param('requestId') requestId: string,
  ) {
    if (!Object.keys(workingDays).length) {
      throw new BadRequestException('You should provide at least one week-day');
    }
    const workingDaysId = await this.workDayService.create(workingDays);

    return { workingDaysId };
  }

}