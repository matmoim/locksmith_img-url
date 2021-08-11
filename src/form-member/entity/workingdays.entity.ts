import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Time } from "./time.entity";

@Entity()
export class WorkingDays {
  @PrimaryColumn()
  id!: number;

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

  @OneToOne(() => Time, time => time.workingdays)
  time!: Time;
}