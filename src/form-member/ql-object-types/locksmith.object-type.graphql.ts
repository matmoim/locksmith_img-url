import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class LocksmithObjectType {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  adress!: string;

  @Field()
  phone!: string;  

  @Field()
  mail!: string;

  @Field()
  link_to_site!: string;

  @Field()
  link_to_map!: string;

  @Field(type => [String])
  services!: string[];

  @Field({ nullable: true })
  prevNameFolder?: string;
}