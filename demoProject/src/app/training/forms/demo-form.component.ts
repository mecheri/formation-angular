import { Component } from '@angular/core';

import { Demo } from './demo';

@Component({
  selector: 'demo-form',
  templateUrl: './demo-form.component.html'
})
export class DemoFormComponent {

  model = new Demo(1, 'A', 'Demo Label');

  submitted = false;

  newDemo() {
    this.model = new Demo(2, '', '');
  }

  onSubmit() { 
    this.submitted = true;
    this.model = new Demo(2, '', '');
  }
}