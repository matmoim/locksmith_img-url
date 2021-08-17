import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { WorkingDays } from './workings-day.entity';

@Entity('request')
export class Request {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToOne(() => WorkingDays)
  @JoinColumn()
  working_days?: WorkingDays; 

  @Column()
  business_name!: string;

  @Column('character varying', { default: '{}', array: true })
  business_adress!: string[];

  @Column()
  business_phone!: string;

  @Column()
  business_mail!: string;

  @Column()
  link_to_site!: string;

  @Column()
  link_to_map!: string;

  @Column('character varying', { default: '{}', array: true })
  services!: string[];

  @Column()
  owners_name!: string;

  @Column()
  owners_phone!: string;

  @Column({ nullable: true })
  photo!: string;

  @Column({ nullable: true })
  files!: string;
}