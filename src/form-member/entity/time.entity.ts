import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { WorkingDays } from "./workingdays.entity";

@Entity()
export class Time {
  @PrimaryColumn()
  id!: number;

  @Column({ type: 'time'})
  from!: Date

  @Column({ type: 'time' })
  to!: Date
}


