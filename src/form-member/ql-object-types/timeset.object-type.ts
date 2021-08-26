import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TimeSetObjecType {

  @Field()
  id!: string;
  @Field()
  from!: string;

  @Field()
  to!: string;
}