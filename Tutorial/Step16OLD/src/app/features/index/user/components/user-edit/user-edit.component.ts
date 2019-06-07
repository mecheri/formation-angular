import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

// Services
import { UserService } from './../../services/user.service';
import { ResourcesService } from '../../../../../core/services/resources.service';
import { NotifierService } from 'angular-notifier';

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
  editForm: FormGroup;

  public isFormSaved: boolean;

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', routerLink: '/user' },
    { label: 'User Edit' }
  ];

  /**
   *Creates an instance of UserEditComponent.
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {FormBuilder} fb
   * @param {NotifierService} notifier
   * @param {UserService} userService
   * @param {ResourcesService} rscService
   * @memberof UserEditComponent
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notifier: NotifierService,
    private userService: UserService,
    private rscService: ResourcesService
  ) { }

  ngOnInit() {
    this.loadResources();
    this.createForm();
    this.getUser();
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
        }
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
          this.notifier.notify('success', 'Operation successfully done !');
          this.router.navigate(['user', resp.id]);
        }
      );
  }
}
