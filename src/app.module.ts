import { Module } from '@nestjs/common';
import { FormMemberModule } from './form-member/form-member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './form-member/entity/locksmith.entity';
import { Request } from './form-member/entity/request.entity';
import { Time } from './form-member/entity/time.entity';
import { WorkingDays } from './form-member/entity/workingdays.entity';
import { SetTimeController } from './form-member/set-time.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mathew',
      password: 'qwerty',
      database: 'evening',
      entities: [
       Locksmith,
       Request,
       Time,
       WorkingDays
      ],
      synchronize: true,
    }),
    FormMemberModule,
  ],
  controllers: [SetTimeController],
})
export class AppModule {}
