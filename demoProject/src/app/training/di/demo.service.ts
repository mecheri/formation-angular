import { Injectable } from '@angular/core';
import { Logger }     from './logger.service';
import { Demo } from './demo';

@Injectable()
export class DemoService {

  constructor(private logger: Logger) { }
  
  getDemos(){
    this.logger.log("chargement des demos");
    const demos: Demo[] = [
      { id: 11, code: 'A', label: 'AAAA' },
      { id: 11, code: 'A', label: 'AAAA' },
      { id: 11, code: 'A', label: 'AAAA' },
      { id: 11, code: 'A', label: 'AAAA' },
      { id: 11, code: 'A', label: 'AAAA' },
      { id: 11, code: 'A', label: 'AAAA' },
    ];

    return demos;
  }
}
