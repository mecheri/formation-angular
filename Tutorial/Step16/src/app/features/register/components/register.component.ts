import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// RxJS
import { finalize } from 'rxjs/operators';

// Services
import { NotificationsService } from 'angular2-notifications';
import { Logger } from '../../../core/services/logger.service';
import { Spinner } from '../../../core/services/spinner.service';
import { Constants } from '../../../core/services/constants.service';
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
    private rsc: any;
    private registerForm: FormGroup;

    get username() { return this.registerForm.get('username'); }
    get password() { return this.registerForm.get('password'); }
    get email() { return this.registerForm.get('email'); }
    get firstname() { return this.registerForm.get('firstname'); }
    get lastname() { return this.registerForm.get('lastname'); }

    /**
     * Creates an instance of RegisterComponent.
     * @param {Router} router 
     * @param {FormBuilder} fb 
     * @param {NotificationsService} notifService 
     * @param {Logger} logger 
     * @param {Spinner} spinner 
     * @param {Constants} constants 
     * @param {MixinService} mixinService 
     * @param {ResourcesService} rscService 
     * @param {AuthService} authService 
     * @memberof RegisterComponent
     */
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private notifService: NotificationsService,
        private logger: Logger,
        private spinner: Spinner,
        private constants: Constants,
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
        this.spinner.show();
        this.authService.register(this.registerForm.value)
            .pipe(finalize(() => this.spinner.hide()))
            .subscribe(
                () => {
                    this.notifService.success(null, 'Inscription effectuée avec succès', { timeOut: 3000 });
                    this.mixinService.startTimer(3000).then(() => this.router.navigate(['login']));
                },
                error => this.notifService.error('Erreur', <any>error));
    }
}