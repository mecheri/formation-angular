import { Component } from '@angular/core';

import { Demo } from './demo';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {

  model = new Demo(1, 'A', 'Demo Label');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
}