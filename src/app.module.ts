import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './form-member/entity/locksmith.entity';
import { Request } from './form-member/entity/request.entity';
import { Time } from './form-member/entity/time.entity';
import { WorkingDays } from './form-member/entity/workings-day.entity';
import { FormMemberModule } from './form-member/form-member.module';
import { TimesModule } from './timesgql/times.module';
import { TimesService } from './timesgql/times.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile:'src/schema.gql'
    }),
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
    TimesModule,
  ],
  providers: [TimesService],
})
export class AppModule { }
