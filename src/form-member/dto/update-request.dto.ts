export class UpdateRequestDto {
    id!: string;
    business_name!: string;
    business_adress!: string;
    business_phone!: string;
    business_mail!: string;
    link_to_site!: string;
    link_to_map!: string;
    services!: string[];
    owners_name!: string;
    owners_phone!: string;
    open_at!: Date;
    close_at!: Date;
    monday!: boolean;
    tuesday!: boolean;
    wednesday!: boolean;
    thursday!: boolean;
    friday!: boolean;
    saturday!: boolean;
    sunday!: boolean;
    photo!: string;
}