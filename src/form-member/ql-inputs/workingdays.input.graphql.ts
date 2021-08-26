import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, ValidateNested } from "class-validator";
import { TimeSetInput } from "./createtime.input.dto";

@InputType()
export class WorkingDaysDtoInput {
  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested()
  monday?: TimeSetInput;

  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  tuesday?: TimeSetInput;

  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  wednesday?: TimeSetInput;

  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  thursday?: TimeSetInput;

  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  friday?: TimeSetInput;

  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  saturday?: TimeSetInput;

  
  @Field(() => TimeSetInput)
  @IsOptional()
  @ValidateNested() 
  sunday?: TimeSetInput;
}