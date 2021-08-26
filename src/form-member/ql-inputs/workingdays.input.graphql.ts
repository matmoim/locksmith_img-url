import { Field, InputType } from "@nestjs/graphql";
import { TimeSetInput } from "./createtime.input.dto";

@InputType()
export class WorkingDaysDtoInput {
  @Field(() => TimeSetInput)
  monday?: TimeSetInput;

  @Field(() => TimeSetInput) 
  tuesday?: TimeSetInput;

  @Field(() => TimeSetInput) 
  wednesday?: TimeSetInput;

  @Field(() => TimeSetInput) 
  thursday?: TimeSetInput;

  @Field(() => TimeSetInput) 
  friday?: TimeSetInput;

  @Field(() => TimeSetInput) 
  saturday?: TimeSetInput;

  
  @Field(() => TimeSetInput) 
  sunday?: TimeSetInput;
}