import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request')
export class Request {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

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