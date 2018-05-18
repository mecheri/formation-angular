import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User;
  userId: number;
  editForm: FormGroup;

  get username() { return this.editForm.get('username'); }
  get password() { return this.editForm.get('password'); }
  get email() { return this.editForm.get('email'); }
  get firstname() { return this.editForm.get('firstname'); }
  get lastname() { return this.editForm.get('lastname'); }

  public isFormSaved: boolean;

  bcItems = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Edit' }
  ];;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private notifService: NotificationsService
  ) {
    this.user = new User();
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.userId = +params['id']);
    this.getUser();
    this.createForm();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        user => this.user = user,
        error => this.notifService.error('Erreur', error)
      );
  }

  createForm() {
    if (this.editForm) { this.editForm.reset(); }
    this.editForm = this.fb.group({
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
    this.userService.updateUser(this.user)
      .subscribe(
        resp => {
          this.isFormSaved = true;
          this.notifService.success(null, 'Success', { timeOut: 3000 });
          this.router.navigate(['user', 'view', resp.id]);
        },
        error => this.notifService.error('Erreur', error));
  }
}
