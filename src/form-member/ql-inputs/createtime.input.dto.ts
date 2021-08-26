import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TimeSetInput {
  @Field()
  from!: Date;

  @Field()
  to!: Date;
}