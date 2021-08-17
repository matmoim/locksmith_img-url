export class CreateRequestDto {
    business_name!: string;
    business_adress!: string[];
    business_phone!: string;
    business_mail!: string;
    link_to_site!: string;
    link_to_map!: string;
    services!: string[];
    owners_name!: string;
    owners_phone!: string;
}