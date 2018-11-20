import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { UserService } from './../../services/user.service';
import { ResourcesService } from '../../../../../core/services/resources.service';
import { NotificationsService } from 'angular2-notifications';

// Models
import { User } from './../../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  rsc: any;
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
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Edit' }
  ];;


  /**
   *Creates an instance of UserEditComponent.
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {FormBuilder} fb
   * @param {UserService} userService
   * @param {ResourcesService} rscService
   * @param {NotificationsService} notifService
   * @memberof UserEditComponent
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService,
    private rscService: ResourcesService,
    private notifService: NotificationsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.userId = +params['id']);
    this.loadResources();
    this.getUser();
    this.createForm();
  }

  loadResources() {
      this.rsc = this.rscService.rsc.pages.user;
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(
        user => {
          this.user = user;
          this.editForm.patchValue(this.user);
        },
        error => this.notifService.error('Erreur', error)
      )
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
      birthdate: [''],
    });
  }

  cancel() {
    this.router.navigate(['user']);
  }

  save() {
    this.userService.updateUser(<User>this.editForm.value)
      .subscribe(
        resp => {
          this.isFormSaved = true;
          this.notifService.success(null, 'Success', { timeOut: 3000 });
          setTimeout(() => this.router.navigate(['user', resp.id]), 3000);
        },
        error => this.notifService.error('Erreur', error));
  }
}
