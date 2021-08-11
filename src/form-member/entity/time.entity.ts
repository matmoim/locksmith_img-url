import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { WorkingDays } from "./workingdays.entity";

@Entity()
export class Time {
  @PrimaryColumn()
  id!: number;

  @Column("time")
  from!: Date

  @Column("time")
  to!: Date

  @OneToOne(() => WorkingDays, workingdays => workingdays.time)
  @JoinColumn()
  workingdays!: WorkingDays;
}

