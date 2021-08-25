import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocksmithInput {
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