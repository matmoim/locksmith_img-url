import { BadRequestException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WorkingDaysDtoInput } from "../ql-inputs/workingdays.input.graphql";
import { WorkingDaysDtoObjecType } from "../ql-object-types/workingdays.obj-typ.praphql";
import { WorkingDayService } from "../services/working-days.service";

@Resolver()
export class WeekDayTimeResolver {
  constructor(
    private workingDayService: WorkingDayService,
  ) { }

  @Query(() => String)
  allWeekDayTime() {
    return 'Hello World'
  }


  @Mutation(()  => Number )
  async createWorkDayTimes(@Args('setTimToDay') workingDaysDtoInput: WorkingDaysDtoInput) {
    if (!Object.keys(workingDaysDtoInput).length) {
      throw new BadRequestException('You should provide at least one week-day');
    }

    console.log(workingDaysDtoInput)
    const workingDaysId = await this.workingDayService.create(workingDaysDtoInput as any);
    console.log(workingDaysId);
    return  workingDaysId ;


  }


}

