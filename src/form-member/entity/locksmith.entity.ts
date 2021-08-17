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
  
    @Column({ nullable: true })
    photo!: string;  

    @Column("varchar", { array: true, default: '{}' })
    zips!: string[];
}
