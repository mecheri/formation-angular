import { Component, OnChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

import { Demo } from './demo';

@Component({
  selector: 'demo-react-form',
  templateUrl: './demo-react-form.component.html'
})
export class DemoReactFormComponent {
  demoForm1 = new FormGroup({ code: new FormControl() });

  demo: Demo;

  demoForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    if (this.demoForm2) {
      this.demoForm2.reset();
    }

    this.demoForm2 = this.fb.group({
      code: ['', Validators.required], // <--- FormControl
      label: ['', forbiddenLabelValidator(/test/i)],
      demoChild: this.fb.group(new Demo()),// <-- the child FormGroup
    });

    this.demoForm2.setValue({
      code: "test",
      label: "test",
      demoChild: new Demo(2, 'test', 'test')
    });

    this.demoForm2.patchValue({
      code: "test",
    });
  }
  get code() { return this.demoForm2.get('code'); }

  get label() { return this.demoForm2.get('label'); }

  onSubmit() {
    this.demoForm2.reset();
  }
}


export function forbiddenLabelValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenLabel': { value: control.value } } : null;
  };
}