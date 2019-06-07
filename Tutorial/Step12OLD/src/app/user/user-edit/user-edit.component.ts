import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../user/user';
import { UserService } from '../../user/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User;
  editForm: FormGroup;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Edit' }
  ];;

  validation: any = {
    username: {
      required: 'User name is required.',
    },
    password: {
      required: 'Password is required.',
    },
    email: {
      required: 'Email is required.',
      email: 'Invalid Email',
    },
    firstname: {
      required: 'First name is required.',
    },
    lastname: {
      required: 'Last name is required.',
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notifier: NotifierService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        user => {
          this.user = user;
          this.editForm.patchValue(this.user);
        },
        error => this.notifier.notify('error', error)
      );
  }

  createForm() {
    if (this.editForm) { this.editForm.reset(); }
    this.editForm = this.fb.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  cancel() {
    this.router.navigate(['user']);
  }

  save() {
    this.userService.updateUser(<User>this.editForm.value)
      .subscribe(
        resp => {
          this.notifier.notify('success', 'Operation successfully done !');
          this.router.navigate(['user', resp.id]);
        },
        error => this.notifier.notify('error', error)
      );
  }
}
