export class CreateLocksmithDto {
    name!: string;
    adress!: string;
    phone!: string;  
    mail!: string;
    link_to_site!: string;
    link_to_map!: string;
    services!: string[];
    prevNameFolder?: string;
}