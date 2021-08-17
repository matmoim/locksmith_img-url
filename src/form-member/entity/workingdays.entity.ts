import { Column, Entity, JoinColumn, ManyToOne,OneToOne,PrimaryColumn } from "typeorm";
import { Time } from "./time.entity";

@Entity()
export class WorkingDays {
  @PrimaryColumn()
  id!: number;

  @OneToOne(() => Time)
  @JoinColumn()
  monday!: Time;
  
  @OneToOne(() => Time)
  tuesday!: Time;
  
  @OneToOne(() => Time)
  wednesday!: Time;
  
  @OneToOne(() => Time)
  thursday!: Time;
  
  @OneToOne(() => Time)
  friday!: Time;
  
  @OneToOne(() => Time)
  saturday!: Time;
  
  @OneToOne(() => Time)
  sunday!: Time;
}
