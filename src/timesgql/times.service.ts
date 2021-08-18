import { Injectable } from '@nestjs/common';
import { Times } from './times.entity';

@Injectable()
export class TimesService {
 async  findAll(): Promise<Times[]>{

    const times = new Times();
    times.id = 1;
    times.to = 1;
    times.from = 1;

    return [times];
  }

}
