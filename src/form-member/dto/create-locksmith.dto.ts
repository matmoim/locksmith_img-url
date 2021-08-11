export class CreateLocksmithDto {
    name!: string;
    adress!: string;
    phone!: string;  
    mail!: string;
    link_to_site!: string;
    link_to_map!: string;
    services!: string[];
    open_at!: Date;
    close_at!: Date;
    // monday!: boolean;
    // tuesday!: boolean;
    // wednesday!: boolean;
    // thursday!: boolean;
    // friday!: boolean;
    // saturday!: boolean;
    // sunday!: boolean;
    prevNameFolder?: string;
}