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
  @JoinColumn()
  tuesday!: Time;
  
  @OneToOne(() => Time)
  @JoinColumn()
  wednesday!: Time;
  
  @OneToOne(() => Time)
  @JoinColumn()
  thursday!: Time;
  
  @OneToOne(() => Time)
  @JoinColumn()
  friday!: Time;
  
  @OneToOne(() => Time)
  @JoinColumn()
  saturday!: Time;
  
  @OneToOne(() => Time)
  @JoinColumn()
  sunday!: Time;
}
