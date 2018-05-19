import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

// Services
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    /**
     * Creates an instance of ExceptionService.
     *
     * @param {AuthService} authService
     */
    constructor(private router: Router,
        private authService: AuthService) { }

    /**
     * Indicates if a route can be activated
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {boolean}
     * @memberof AuthGuardService
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    /**
     * Check if user is logged in
     *
     * @param {string} url
     * @returns {boolean}
     * @memberof AuthGuardService
     */
    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn()) { return true; }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}