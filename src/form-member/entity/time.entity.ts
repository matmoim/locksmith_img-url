import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { WorkingDays } from "./workingdays.entity";

@Entity()
export class Time {
  @PrimaryColumn()
  id!: number;

  @Column("time")
  from!: Date

  @Column("time")
  to!: Date

  @OneToMany(() => WorkingDays, workingdays => workingdays.times)
  workingdays!: WorkingDays[];
}


