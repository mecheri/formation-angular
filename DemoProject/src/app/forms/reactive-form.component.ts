import { Component, OnChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

import { Demo } from './demo';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent {
  demo: Demo;
  reactiveForm: FormGroup;

  get code() { return this.reactiveForm.get('code'); }
  get label() { return this.reactiveForm.get('label'); }
  get codeChild() { return this.reactiveForm.get('reactiveFormChild').get('code'); }
  get labelChild() { return this.reactiveForm.get('reactiveFormChild').get('label'); }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    if (this.reactiveForm) {
      this.reactiveForm.reset();
    }

    // demoForm = new FormGroup({ code: new FormControl() }); --> meme chose que fb
    this.reactiveForm = this.fb.group({
      code: ['', Validators.required], // <--- FormControl
      label: ['', forbiddenLabelValidator(/test/i)],
      reactiveFormChild: this.fb.group({
        id: [''],
        code: ['', Validators.required], // <--- FormControl
        label: ['', forbiddenLabelValidator(/test/i)],
      }), // <-- the child FormGroup
    });

    this.reactiveForm.setValue({
      code: "test",
      label: "test",
      reactiveFormChild: new Demo(2, 'test', 'test')
    });

    this.reactiveForm.patchValue({
      code: "test",
    });
  }

  onSubmit() {
    this.reactiveForm.reset();
  }
}

export function forbiddenLabelValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbiddenLabel': { value: control.value } } : null;
  };
}