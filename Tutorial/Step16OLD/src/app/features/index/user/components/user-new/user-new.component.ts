import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';
import { ResourcesService } from '../../../../../core/services/resources.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  rsc: any;
  creationForm: FormGroup;

  public isFormSaved: boolean;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User New' }
  ];

  /**
   *Creates an instance of UserNewComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {NotifierService} notifier
   * @param {UserService} userService
   * @param {ResourcesService} rscService
   * @memberof UserNewComponent
   */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notifier: NotifierService,
    private userService: UserService,
    private rscService: ResourcesService
  ) { }

  ngOnInit() {
    this.loadResources();
    this.createForm();
  }

  loadResources() {
    this.rsc = this.rscService.rsc.pages.user;
  }

  createForm() {
    if (this.creationForm) { this.creationForm.reset(); }
    this.creationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, forbiddenValidator(/test/i)]],
      lastname: ['', Validators.required],
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
          this.notifier.notify('success', 'Operation successfully done !');
          this.router.navigate(['user', resp.id]);
        }
      );
  }
}

export function forbiddenValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { 'forbidden': { value: control.value } } : null;
  };
}