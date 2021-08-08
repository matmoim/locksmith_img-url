import { Module } from '@nestjs/common';
import { FormMemberModule } from './form-member/form-member.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './form-member/entity/locksmith.entity';
import { Request } from './form-member/entity/request.entity';

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
       Request
      ],
      synchronize: true,
    }),
    FormMemberModule,
  ],
})
export class AppModule {}
