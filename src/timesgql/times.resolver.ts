import { Query, Resolver } from '@nestjs/graphql';
import { Times } from './times.entity';
import { TimesService } from './times.service';

@Resolver()
export class TimesResolver {
  constructor(private timesService: TimesService) { }

  @Query(returns =>[Times])
  times(): Promise<Times[]> {
    return this.timesService.findAll();
  }
}
