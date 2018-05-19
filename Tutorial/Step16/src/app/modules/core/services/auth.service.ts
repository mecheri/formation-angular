import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Services
import { Logger } from './logger.service';
import { Constants } from './constants.service';
import { SettingsService } from './settings.service';
import { HttpResponseService } from './http-response.service';

// Models
import { Auth } from './../models/auth';
import { User } from './../models/user';

@Injectable()
export class AuthService {

    // store the URL so we can redirect after logging in
    public redirectUrl: string = '/home';

    /**
     * Creates an instance of AuthService.
     * @param {HttpClient} http
     * @param {Logger} logger
     * @param {Constants} constants
     * @param {SettingsService} settingsService
     * @param {HttpResponseService} httpRespService
     * @memberof AuthService
     */
    constructor(
        private http: HttpClient,
        private logger: Logger,
        private constants: Constants,
        private settingsService: SettingsService,
        private httpRespService: HttpResponseService
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
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', auth.username);
        urlSearchParams.append('password', auth.password);
        let body = urlSearchParams.toString();
        let headers = new HttpHeaders().set('Content-Type', 'application/json-patch+json');
        return this.http
            .post<HttpResponse<any>>(`${this.settingsService.get().apiUrl}/api/Auth/login`,
                auth,
                { headers: headers })
            .map((res: any) => {
                this.storeToken(res.token);
                this.storeUserContext({ username: res.username });
                this.logger.trace('Auth is done');
            })
            .catch(this.httpRespService.handleError);
    }

    /**
     * Register user
     * 
     * @param {User} user 
     * @returns {Observable<any>} 
     * @memberof AuthService
     */
    register(user: User): Observable<any> {
        const body = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type', 'application/json-patch+json');
        return this.http
            .post(`${this.settingsService.get().apiUrl}/api/User`, user,
                { headers: headers })
            .catch(this.httpRespService.handleError);
    }

    /**
     * Stockage du token d'authentification
     *
     * @param {*} token
     *
     * @memberOf AuthService
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
     *
     * @memberOf AuthService
     */
    storeUserContext(data: any) {
        if (data) { localStorage.setItem(this.constants.APP_USER, JSON.stringify(data)); }
    }

    /**
     * Vérifie si l'utilisateur est connecté
     *
     * @returns
     *
     * @memberOf AuthService
     */
    isLoggedIn() {
        return localStorage.getItem(this.constants.ACCESS_TOKEN) !== null;
    }
}
