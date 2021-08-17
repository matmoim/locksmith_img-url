import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNumber, IsPhoneNumber, IsString, IsUrl } from "class-validator";

export class CreateRequestDto {
    @IsString()
    business_name!: string;
    @IsArray()
    business_adress!: string[];
    @IsPhoneNumber()
    business_phone!: string;
    @IsEmail()
    business_mail!: string;
    @IsUrl()
    link_to_site!: string;
    @IsUrl()
    link_to_map!: string;
    @IsArray()
    services!: string[];
    @IsString()
    owners_name!: string;
    @IsPhoneNumber()
    owners_phone!: string;
    @IsNumber()
    @Type(() => Number)
    workingDaysId?: number;
}