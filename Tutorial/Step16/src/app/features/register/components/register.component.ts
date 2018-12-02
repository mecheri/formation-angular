import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Services
import { NotificationsService } from 'angular2-notifications';
import { MixinService } from '../../../core/services/mixin.service';
import { ResourcesService } from '../../../core/services/resources.service';
import { AuthService } from '../../../core/services/auth.service';

/**
 * Register Component
 *
 * @export
 * @class RegisterComponent
 * @implements {OnInit}
 */
@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
    rsc: any;
    registerForm: FormGroup;

    /**
     *Creates an instance of RegisterComponent.
     * @param {Router} router
     * @param {FormBuilder} fb
     * @param {NotificationsService} notifService
     * @param {MixinService} mixinService
     * @param {ResourcesService} rscService
     * @param {AuthService} authService
     * @memberof RegisterComponent
     */
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private notifService: NotificationsService,
        private mixinService: MixinService,
        private rscService: ResourcesService,
        private authService: AuthService
    ) { }

    /**
     * Component init
     *
     * @memberof RegisterComponent
     */
    ngOnInit() {
        this.loadResources();
        this.loadForm();
    }

    /**
     * Load resources
     *
     * @memberof RegisterComponent
     */
    loadResources() {
        this.rsc = this.rscService.rsc.pages.register;
    }

    /**
     * Load form
     *
     * @memberof RegisterComponent
     */
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

    /**
     * Cancel registration
     *
     * @memberof RegisterComponent
     */
    cancel() {
        this.router.navigate(['home']);
    }

    /**
     * Save regsitration
     *
     * @memberof RegisterComponent
     */
    save() {
        this.authService.register(this.registerForm.value)
            .subscribe(
                () => {
                    this.notifService.success(null, 'Inscription effectuée avec succès', { timeOut: 3000 });
                    this.mixinService.startTimer(3000).then(() => this.router.navigate(['login']));
                },
                error => this.notifService.error('Erreur', <any>error));
    }
}