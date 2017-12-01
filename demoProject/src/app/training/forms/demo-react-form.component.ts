import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Demo } from './demo';

@Component({
  selector: 'demo-react-form',
  templateUrl: './demo-react-form.component.html'
})
export class DemoReactFormComponent {
  code = new FormControl();

  demoForm1 = new FormGroup({ code: new FormControl() });

  demoForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    if(this.demoForm2){
      this.demoForm2.reset();
    }
    
    this.demoForm2 = this.fb.group({
      code: ['', Validators.required], // <--- FormControl
      label: ['', Validators.minLength(4)], // <--- FormControl
      demoChild: this.fb.group(new Demo()),// <-- the child FormGroup
    });

    // this.demoForm2.setValue({
    //   code: "qsdsqd",
    //   label: "qsdqsdqsd",
    //   demoChild: new Demo(2, 'ddf', 'qdqs')
    // });

    // this.demoForm2.patchValue({
    //   code: "qsdsqd",
    // });

  }
}
