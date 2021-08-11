import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Request } from "./request.entity";
import { Locksmith } from "./locksmith.entity";
import { request } from "express";
@Entity()
export class Time {
  @PrimaryColumn()
  id!: number;

  @Column("time")
  from!: Date

  @Column("time")
  to!: Date

  @ManyToOne(() => Request , request => request.)
  

  @ManyToOne(() => Locksmith)
}

