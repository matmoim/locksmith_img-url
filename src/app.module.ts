import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Locksmith } from './form-member/entity/locksmith.entity';
import { Request } from './form-member/entity/request.entity';
import { Time } from './form-member/entity/time.entity';
import { WorkingDays } from './form-member/entity/workings-day.entity';
import { FormMemberModule } from './form-member/form-member.module';

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
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    FormMemberModule,
  ],
})
export class AppModule { }
