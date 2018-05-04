import { Injectable } from '@angular/core';
import { Logger } from './logger.service';
import { Demo } from './demo';

@Injectable()
export class DemoService {

  constructor(private logger: Logger) { }

  getDemos() {
    this.logger.log("Chargement des demos");
    return [
      new Demo(11, 'A', 'AAAA'),
      new Demo(11, 'A', 'AAAA'),
      new Demo(11, 'A', 'AAAA'),
      new Demo(11, 'A', 'AAAA'),
      new Demo(11, 'A', 'AAAA')
    ];
  }
}
