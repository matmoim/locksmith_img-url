import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TimeSetObjecType {

  @Field()
  id!: string;
  @Field()
  from!: Date;

  @Field()
  to!: Date;
}