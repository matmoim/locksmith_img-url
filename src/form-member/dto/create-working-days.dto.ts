import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { CreateTimeSetDto } from "./createtimeset.ts.dto";


export class CreateWorkingDaysDto {
  @IsOptional()
  @ValidateNested()
  @Type(() => CreateTimeSetDto)
  monday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  tuesday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  wednesday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  thursday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  friday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  saturday?: CreateTimeSetDto;

  @IsOptional()
  @ValidateNested() 
  @Type(() => CreateTimeSetDto)
  sunday?: CreateTimeSetDto;
}