import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// Services
import { Logger } from './../services/logger.service';
import { Constants } from './../services/constants.service';
import { HttpResponseService } from './http-response.service';

/**
 * Service to handle global application resources
 *
 * @export
 * @class ResourcesService
 */
@Injectable()
export class ResourcesService {
    public rsc: any;

    /**
     * Creates an instance of ResourcesService.
     * @param {HttpClient} http
     * @param {Logger} logger
     * @param {HttpResponseService} httpRespService
     * @memberof ResourcesService
     */
    constructor(
        private http: HttpClient,
        private logger: Logger,
        private constants: Constants,
        private httpRespService: HttpResponseService) {
    };

    /**
     * Load application resources
     *
     * @returns
     * @memberof ResourcesService
     */
    load() {
        let headers = new HttpHeaders();
        headers.append('Cache-Control', 'no-cache');
        headers.append('Pragma', 'no-cache');
        return new Promise(resolve => {
            this.http
                .get(`res/_resources.json`, { headers: headers })
                .subscribe(
                    (rsc) => {
                        this.rsc = rsc;
                        resolve(true);
                    },
                    (error) => this.httpRespService.handleError,
                    () => this.logger.trace('Resources loaded')
                );
        });
    }

    /**
     * Read resources
     *
     * @returns
     *
     * @memberOf ResourcesService
     */
    get() {
        return this.rsc;
    }

    /**
     * Read user context data
     *
     * @returns
     *
     * @memberOf ResourcesService
     */
    getUserContext() {
        return JSON.parse(localStorage.getItem(this.constants.APP_USER));
    }
}