import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { WorkingDaysDtoInput } from "../ql-inputs/workingdays.input.graphql";
import { WorkingDaysDtoObjecType } from "../ql-object-types/workingdays.obj-typ.praphql";
import { WorkingDayService } from "../services/working-days.service";

@Resolver()
export class WeekDayTime {
  constructor(
    private workingDayService: WorkingDayService
  ) { }

  @Query(() => [WorkingDaysDtoObjecType])
  allWeekDayTime() {
    return this.workingDayService.create;
  }


  @Mutation(() => WorkingDaysDtoObjecType)
  createWorkDayTimes(@Args('setTimToDay') workingDaysDtoInput: WorkingDaysDtoInput) {
    return this.workingDayService.create(workingDaysDtoInput);
  }

}
