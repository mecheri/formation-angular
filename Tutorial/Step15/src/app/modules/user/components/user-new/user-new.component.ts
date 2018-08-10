import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { NotificationsService } from 'angular2-notifications';

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

  public isFormSaved: boolean;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User New' }
  ];;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService,
    private notifService: NotificationsService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    if (this.creationForm) { this.creationForm.reset(); }

    this.creationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, forbiddenValidator(/test/i)]],
      lastname: ['', Validators.required]
    });
  }

  cancel() {
    this.router.navigate(['user']);
  }

  save() {
    this.userService.createUser(this.creationForm.value)
      .subscribe(
        resp => {
          this.isFormSaved = true;
          this.notifService.success(null, 'Success', { timeOut: 3000 });
          setTimeout(() => this.router.navigate(['user', resp.id]), 3000);
        },
        error => this.notifService.error('Erreur', error));
  }
}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbidden': { value: control.value } } : null;
  };
}