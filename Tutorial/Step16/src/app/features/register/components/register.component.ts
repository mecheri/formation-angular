import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { NotifierService } from 'angular-notifier';
import { MixinService } from '../../../core/services/mixin.service';
import { ResourcesService } from '../../../core/services/resources.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  rsc: any;
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notifier: NotifierService,
    private mixinService: MixinService,
    private rscService: ResourcesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadResources();
    this.loadForm();
  }

  loadResources() {
    this.rsc = this.rscService.rsc.pages.register;
  }

  loadForm() {
    if (this.registerForm) { this.registerForm.reset(); }
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  cancel() {
    this.router.navigate(['home']);
  }

  save() {
    this.authService.register(this.registerForm.value)
      .subscribe(
        () => {
          this.notifier.notify('success', 'Operation successfully done');
          this.router.navigate(['login']);
        });
  }
}