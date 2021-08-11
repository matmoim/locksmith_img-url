import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('locksmith')
export class Locksmith {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    adress!: string;
    
    @Column()
    phone!: string;  
    
    @Column()
    mail!: string;
    
    @Column()
    link_to_site!: string;
    
    @Column()
    link_to_map!: string;
  
    @Column("varchar", { array: true })
    services!: string[];
  
    @Column()
    open_at!: Date;

    @Column()
    close_at!: Date;
  
    @Column({ nullable: true })
    photo!: string;  

    @Column("varchar", { array: true, default: '{}' })
    zips!: string[];

    // Work days

    // @Column({ default: false })
    // monday!: boolean;

    // @Column({ default: false })
    // tuesday!: boolean;

    // @Column({ default: false })
    // wednesday!: boolean;

    // @Column({ default: false })
    // thursday!: boolean;

    // @Column({ default: false })
    // friday!: boolean;

    // @Column({ default: false })
    // saturday!: boolean;

    // @Column({ default: false })
    // sunday!: boolean;

    // Work days
}
