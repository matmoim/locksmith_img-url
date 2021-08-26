import { Field, ObjectType } from "@nestjs/graphql";
import { TimeSetObjecType } from "./timeset.object-type";

@ObjectType()
export class WorkingDaysDtoObjecType {

  @Field()
  id!: string;

  @Field(() => TimeSetObjecType)
  monday?: TimeSetObjecType;

  @Field(() => TimeSetObjecType)
  tuesday?: TimeSetObjecType;

  @Field(() => TimeSetObjecType)
  wednesday?: TimeSetObjecType;

  @Field(() => TimeSetObjecType)
  thursday?: TimeSetObjecType;

  @Field(() => TimeSetObjecType)
  friday?: TimeSetObjecType;

  @Field(() => TimeSetObjecType)
  saturday?: TimeSetObjecType;


  @Field(() => TimeSetObjecType)
  sunday?: TimeSetObjecType;
}