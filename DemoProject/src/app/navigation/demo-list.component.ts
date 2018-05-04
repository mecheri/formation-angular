import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Demo } from './demo';

@Component({
  template: `
    <table class="table">
      <thead>
          <tr>
              <th>ID</th>
              <th>ID</th>
              <th>Code</th>
              <th>Label</th>
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let demo of demos">
              <td><a [routerLink]="['/demo-detail/view', demo.id]"> {{ demo.id }}</a></td>
              <td><a style="cursor:pointer" (click)="goToDemoDetailProgrammatically(demo.id)"> {{ demo.id }}</a></td>
              <td>{{ demo.code }}</td>
              <td>{{ demo.label }}</td>
          </tr>
      </tbody>
    </table>

    <p>Dernier Demo modifié: {{ lastIdedited }}</p>
`,
})
export class DemoListComponent implements OnInit, OnDestroy {
  subscription: any;
  lastIdedited: number;

  demos: Demo[] = [
    { id: 1, code: 'A', label: 'AAAA' },
    { id: 2, code: 'B', label: 'BBBB' },
    { id: 3, code: 'C', label: 'CCCC' },
    { id: 4, code: 'D', label: 'DDDD' },
    { id: 5, code: 'E', label: 'EEEE' },
    { id: 6, code: 'F', label: 'FFFF' },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      this.lastIdedited = +params['id'] || 0; // 0 si pas de query param
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToDemoDetailProgrammatically(id) {
    this.router.navigate(['demo-detail', 'view', id]);
    this.router.navigateByUrl(`/demo-detail/view/${id}`);
  }
}