import { IsString } from "class-validator";


export class CreateTimeSetDto {
  @IsString()
  from!: Date;
  @IsString()
  to!: Date;
}