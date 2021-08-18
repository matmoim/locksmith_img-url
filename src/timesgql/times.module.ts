import { Module } from '@nestjs/common';
import { TimesResolver } from './times.resolver';

@Module({
  providers: [TimesResolver]
})
export class TimesModule {}
