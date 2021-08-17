import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('time')
export class Time {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'time'})
  from!: Date

  @Column({ type: 'time' })
  to!: Date
}


