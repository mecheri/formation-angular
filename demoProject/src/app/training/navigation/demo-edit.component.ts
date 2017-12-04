import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Demo } from './demo';

@Component({
  template: `
  <form #demoForm="ngForm" *ngIf="demo">
    <div class="form-group">
        <label for="code">Code</label>
        <input type="text" class="form-control" name="code" id="code" required [(ngModel)]="demo.code" #code="ngModel">
        <div *ngIf="code.invalid && (code.dirty || code.touched)" class="alert alert-danger">
            <div *ngIf="code.errors.required">
                Le Code est obligatoire
            </div>
        </div>
    </div>

    <div class="form-group">
        <label for="label">Label</label>
        <input type="text" class="form-control" name="label" id="label" required [(ngModel)]="demo.label" #label="ngModel">
        <div *ngIf="label.invalid && (label.dirty || label.touched)" class="alert alert-danger">
            <div *ngIf="label.errors.required">
                Le Label est obligatoire
            </div>
        </div>
    </div>

     <button type="submit" class="btn btn-success" [disabled]="!demoForm.form.valid" (click)="save()">Valider</button>
  </form>
`,
})
export class DemoEditComponent {
  private subscription: any;
  public isFormSaved;
  demo: Demo = new Demo();

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
        return el.id === +params['id'];
      })[0];
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  save() {
    this.isFormSaved = true;
    this.router.navigate(['demo'], { queryParams: { id: this.demo.id } });
  }
}