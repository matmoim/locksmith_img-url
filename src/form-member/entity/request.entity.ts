import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('request')
export class Request {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  business_name!: string;

  @Column()
  business_adress!: string;

  @Column()
  business_phone!: string;

  @Column()
  business_mail!: string;

  @Column()
  link_to_site!: string;

  @Column()
  link_to_map!: string;

  @Column()
  open_at!: Date;

  @Column()
  close_at!: Date;

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

  // Work days

  @Column({ default: false })
  monday!: boolean;

  @Column({ default: false })
  tuesday!: boolean;

  @Column({ default: false })
  wednesday!: boolean;

  @Column({ default: false })
  thursday!: boolean;

  @Column({ default: false })
  friday!: boolean;

  @Column({ default: false })
  saturday!: boolean;

  @Column({ default: false })
  sunday!: boolean;

  // Work days
}