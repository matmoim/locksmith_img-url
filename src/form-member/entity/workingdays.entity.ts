import { Column, Entity, ManyToOne,PrimaryColumn } from "typeorm";
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

  @ManyToOne(() => Time, time => time.workingdays)
  times!: Time;
}
