import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TimeSetInput {
  @Field()
  from!: string;

  @Field()
  to!: string;
}