import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class TimeSetInput {
  @Field()
  @IsString()
  from!: Date;

  @Field()
  @IsString()
  to!: Date;
}