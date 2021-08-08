import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locksmith } from './entity/locksmith.entity';
import { FormMemberController } from './form-member.controller';
import { FormMemberService } from './form-member.service';
import { Request } from './entity/request.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Locksmith, Request])],
    providers: [FormMemberService],
    controllers: [FormMemberController]
})
export class FormMemberModule {

}
