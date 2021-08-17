import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './entity/locksmith.entity';
import { FormMemberController, WorkDayController } from './form-member.controller';
import { FormMemberService, WorkDayService } from './form-member.service';
import { Request } from './entity/request.entity';
import { Time } from './entity/time.entity';
import { WorkingDays } from './entity/workingdays.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Locksmith, Request,
            Time,WorkingDays]),
        HttpModule,
    ],
    providers: [FormMemberService,WorkDayService ],
    controllers: [FormMemberController,WorkDayController]
})
export class FormMemberModule {

}
