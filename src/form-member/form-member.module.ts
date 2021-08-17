import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkDayController } from './controllers/workingdays.controller';
import { Locksmith } from './entity/locksmith.entity';
import { Request } from './entity/request.entity';
import { Time } from './entity/time.entity';
import { WorkingDays } from './entity/workingdays.entity';
import { FormMemberController } from './controllers/form-member.controller';
import { FormMemberService } from './services/form-member.service';
import { WorkDayService } from './services/working-days.service';

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
