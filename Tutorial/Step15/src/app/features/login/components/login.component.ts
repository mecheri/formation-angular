import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth.service';
import { ResourcesService } from './../../../core/services/resources.service';
import { Auth } from './../../../core/models/auth';

/**
* Login Componenet
*
* @export
* @class LoginComponent
* @implements {OnInit}
*/
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  rsc: any;
  form: FormGroup;
  errorMessage: any;

  /**
   * Creates an instance of LoginComponent.
   * @param {Router} router
   * @param {FormBuilder} fb
   * @param {ResourcesService} rscService
   * @param {AuthService} authService
   * @memberof LoginComponent
   */
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private rscService: ResourcesService,
    private authService: AuthService
  ) { }

  /**
  * Component Init
  *
  * @memberof LoginComponent
  */
  ngOnInit() {
    this.loadResources();
    this.createForm();
  }

  /**
  * Load resources
  *
  * @memberof LoginComponent
  */
  loadResources() {
    this.rsc = this.rscService.rsc.pages.login;
  }

  /**
   * Create Login From
   *
   * @memberof LoginComponent
   */
  createForm() {
    this.form = this.fb.group(new Auth());
    this.form.controls.username.setValidators([Validators.required]);
    this.form.controls.password.setValidators([Validators.required]);
  }

  /**
  * Login to the app.
  *
  * @memberof LoginComponent
  */
  onSubmit() {
    this.authService.check(this.form.value)
      .subscribe(
        () => this.router.navigate(['home']),
        (error) => this.errorMessage = error
      );
  }

  /**
  * Go to register page.
  *
  * @memberof LoginComponent
  */
  register() {
    this.router.navigate(['register']);
  }
}