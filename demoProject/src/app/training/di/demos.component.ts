import { Component } from '@angular/core';

import { DemoService } from './demo.service';

import { Demo } from './demo';

@Component({
  selector: 'demos-di',
  templateUrl: './demos.component.html',
  providers: [ DemoService ]
})
export class DemosComponent {
  demos: Demo[];
  constructor(demoService: DemoService) {
    this.demos = demoService.getDemos();
  }
 }