import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Time {
  @PrimaryColumn()
  id!: number;

  @Column({ type: 'time'})
  from!: Date

  @Column({ type: 'time' })
  to!: Date
}


