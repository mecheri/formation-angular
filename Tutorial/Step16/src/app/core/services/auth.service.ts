import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

// RxJS
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Services
import { Logger } from './logger.service';
import { Constants } from './constants.service';
import { SettingsService } from './settings.service';

// Models
import { Auth } from './../models/auth';
import { User } from './../../features/index/user/models/user';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    // store the URL so we can redirect after logging in
    public redirectUrl: string = '/home';

    /**
     *Creates an instance of AuthService.
     * @param {HttpClient} http
     * @param {Router} router
     * @param {Logger} logger
     * @param {Constants} constants
     * @param {SettingsService} settingsService
     * @memberof AuthService
     */
    constructor(
        private http: HttpClient,
        private router: Router,
        private logger: Logger,
        private constants: Constants,
        private settingsService: SettingsService
    ) { };

    /**
     * Authentification sur le serveur
     * Récupération du token d'authentification
     *
     * @param {string} login
     * @param {string} password
     * @returns {Promise<any>}
     *
     * @memberOf AuthService
     */
    check(auth: Auth): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json-patch+json');
        return this.http
            .post<HttpResponse<any>>(`${this.settingsService.config.apiUrl}/api/Auth/login`,
                auth, { headers: headers })
            .pipe(
                map((res: any) => {
                    this.storeToken(res.token);
                    this.storeUserContext({ username: res.username });
                    this.logger.trace('Auth is done');
                }),
                catchError((err) => throwError(err.error.message))
            );
    }

    /**
     * Register user
     *
     * @param {User} user
     * @returns {Observable<any>}
     * @memberof AuthService
     */
    register(user: User): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json-patch+json');
        return this.http
            .post(`${this.settingsService.config.apiUrl}/api/User`, user, { headers: headers });
    }

    /**
     * Stockage du token d'authentification
     *
     * @param {*} token
     * @memberof AuthService
     */
    storeToken(token: any) {
        if (token) {
            localStorage.setItem(this.constants.ACCESS_TOKEN, token);
        }
    }

    /**
     * Récupération du token d'authentification
     *
     * @returns
     * @memberof AuthService
     */
    getToken() {
        return localStorage.getItem(this.constants.ACCESS_TOKEN);
    }

    /**
     * Stockage des données de l'utilisateur courant
     *
     * @param {*} data
     * @memberof AuthService
     */
    storeUserContext(data: any) {
        if (data) { localStorage.setItem(this.constants.APP_USER, JSON.stringify(data)); }
    }

    /**
     * Vérifie si l'utilisateur est connecté
     *
     * @returns
     * @memberof AuthService
     */
    isLoggedIn() {
        return localStorage.getItem(this.constants.ACCESS_TOKEN) !== null;
    }

    /**
     * Set authorisation headers
     *
     * @param {HttpRequest<any>} request
     * @returns
     * @memberof AuthService
     */
    addAuthorizationHeader(request: HttpRequest<any>) {
        if (!this.isLoggedIn()) { return request; }
        return request.clone({ setHeaders: { 'Authorization': `Bearer ${this.getToken()}`, 'Content-Type': 'application/json; charset=utf-8' } });
    }

    /**
     * Clear local storage data
     *
     * @memberof AuthService
     */
    clearLocalStorageData(): void {
        localStorage.removeItem(this.constants.APP_USER);
        localStorage.removeItem(this.constants.ACCESS_TOKEN);
    }

    /**
     * Logout from app
     *
     * @memberof AuthService
     */
    logout(): void {
        this.clearLocalStorageData();
        this.router.navigate(['login']);
    }
}
