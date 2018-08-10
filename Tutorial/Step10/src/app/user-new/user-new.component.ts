import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../user/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {

  creationForm: FormGroup;

  get username() { return this.creationForm.get('username'); }
  get password() { return this.creationForm.get('password'); }
  get email() { return this.creationForm.get('email'); }
  get firstname() { return this.creationForm.get('firstname'); }
  get lastname() { return this.creationForm.get('lastname'); }

  // get usernameC() { return this.creationForm.get('creationFormChild').get('usernameC'); }
  // get passwordC() { return this.creationForm.get('creationFormChild').get('passwordC'); }
  // get emailC() { return this.creationForm.get('creationFormChild').get('emailC'); }
  // get firstnameC() { return this.creationForm.get('creationFormChild').get('firstnameC'); }
  // get lastnameC() { return this.creationForm.get('creationFormChild').get('lastnameC'); }

  public isFormSaved: boolean;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User New' }
  ];;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    if (this.creationForm) { this.creationForm.reset(); }

    // this.creationForm = new FormGroup({ code: new FormControl() }); <-- same as fb.group
    this.creationForm = this.fb.group({
      username: ['', Validators.required], // <--- FormControl
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, forbiddenValidator(/test/i)]],
      lastname: ['', Validators.required],
      // creationFormChild: this.fb.group({
      //   usernameC: ['', Validators.required], // <--- FormControl
      //   passwordC: ['', Validators.required],
      //   emailC: ['', [Validators.required, Validators.email]],
      //   firstnameC: ['', [Validators.required, forbiddenValidator(/test/i)]],
      //   lastnameC: ['', Validators.required],
      // }),
    });
  }

  cancel() {
    this.router.navigate(['user']);
  }

  save() {

  }
}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbidden': { value: control.value } } : null;
  };
}