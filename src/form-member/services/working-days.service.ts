import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateWorkingDaysDto } from "../dto/create-working-days.dto";
import { Time } from "../entity/time.entity";
import { WorkingDays } from "../entity/workings-day.entity";
import { FormMemberService } from "./form-member.service";

@Injectable()
export class WorkingDayService {
    constructor(
        @InjectRepository(Time)
        private readonly timeRepository: Repository<Time>,
        @InjectRepository(WorkingDays)
        private readonly workingDaysRepository: Repository<WorkingDays>,
        private readonly service: FormMemberService
    ) { }

    async create(data: CreateWorkingDaysDto) {
        const times = await Promise.all(
            Object.values(data).map((value: { from: string, to: string }) => {
                return this.timeRepository.insert(value);
            })
        );

        const timesIds = times.map((time) => time.raw[0]?.id);
        const week = {
            0: 'monday' as 'monday',
            1: 'tuesday' as 'tuesday',
            2: 'wednesday' as 'wednesday',
            3: 'thursday' as 'thursday',
            4: 'friday' as 'friday',
            5: 'saturday' as 'saturday',
            6: 'sunday' as 'sunday'
        };
        const parcedData = timesIds.reduce((acc, time, index) => {
            acc[week[index as 0 | 1 | 2 | 3 | 4 | 5 | 6]] = time;

            return acc;
        }, {} as any);


        const { raw: workingDays }  = await this.workingDaysRepository.insert(parcedData);

        return workingDays[0].id;
    }


}