import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Times {
  @Field(type => Int)
  id!: number;

  @Field({nullable: false})
  from!: number;

  @Field({nullable: false})
  to!: number;
}


