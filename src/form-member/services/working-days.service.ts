import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Time } from "../entity/time.entity";
import { WorkingDays } from "../entity/workingdays.entity";

@Injectable()
export class WorkDayService {
    constructor(
        @InjectRepository(Time)
        private readonly timeRepository: Repository<Time>,

        @InjectRepository(WorkingDays)
        private readonly workingDaysRepository: Repository<WorkingDays>,
    ) { }

   //public async create(timeRepository )


}