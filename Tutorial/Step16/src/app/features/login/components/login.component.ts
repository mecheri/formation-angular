import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { AuthService } from './../../../core/services/auth.service';
import { ResourcesService } from './../../../core/services/resources.service';

// Models
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
    model: Auth;
    errorMessage: any;

    /**
     * Creates an instance of LoginComponent.
     * @param {Router} router
     * @param {ResourcesService} rscService
     * @param {AuthService} authService
     * @memberof LoginComponent
     */
    constructor(
        private router: Router,
        private rscService: ResourcesService,
        private authService: AuthService
    ) {
        this.model = new Auth();
    }

    /**
     * Component Init
     *
     * @memberof LoginComponent
     */
    ngOnInit() {
        this.loadResources();
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
     * Login to the app.
     *
     * @memberof LoginComponent
     */
    login() {
        this.authService.check(this.model)
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

    /**
     * Event handle on enter keypress event
     *
     * @param {number} keyCode
     * @memberof LoginComponent
     */
    eventHandler(keyCode: number) {
        if (keyCode === 13) { this.login(); }
    }
}
