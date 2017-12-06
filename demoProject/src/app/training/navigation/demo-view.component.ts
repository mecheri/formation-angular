import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Demo } from './demo';

@Component({
  template: `
  <div *ngIf="demo">
    <div class="form-group">
      <label>Num</label>
      <span>{{ demo.id }}</span>
    </div>
    <div class="form-group">
      <label>Code</label>
      <span>{{ demo.code }}</span>
    </div>
    <div class="form-group">
      <label>Label</label>
      <span>{{ demo.label }}</span>
    </div>
  </div>

  <div style="margin-bottom: 1em">
    <button type="button" class="btn btn-primary" (click)="goToDemoEdit(demo.id)">Editer</button>
  </div>
`,
})
export class DemoViewComponent {
  private subscription: any;

  demo: Demo;

  demos: Demo[] = [
    { id: 1, code: 'A', label: 'AAAA' },
    { id: 2, code: 'B', label: 'BBBB' },
    { id: 3, code: 'C', label: 'CCCC' },
    { id: 4, code: 'D', label: 'DDDD' },
    { id: 5, code: 'E', label: 'EEEE' },
    { id: 6, code: 'F', label: 'FFFF' },
  ];

  constructor(private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
        this.demo = this.demos.filter((el: Demo) => {
          return el.id ===  +params['id'];
        })[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToDemoEdit(id) {
    this.router.navigate(['demo-detail', 'edit', id]);
  }
}