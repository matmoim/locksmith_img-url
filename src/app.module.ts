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
      port: 8080,
      username: 'postgres',
      password: 'qwerty',
      database: 'locksmithmember',
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
