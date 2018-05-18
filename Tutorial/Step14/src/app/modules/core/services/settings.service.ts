import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

// Services
import { Logger } from './../services/logger.service';
import { HttpResponseService } from './../services/http-response.service';

/**
 * App config interface
 *
 * @interface IConfig
 */
interface IConfig {
    version: string,
    apiUrl: string
}

/**
 * Service to handle global application settings
 *
 * @export
 * @class SettingsService
 */
@Injectable()
export class SettingsService {
    public config: IConfig;

    /**
     * Creates an instance of SettingsService.
     * @param {HttpClient} http
     * @param {Logger} logger
     * @param {HttpResponseService} httpRespService
     * @memberof SettingsService
     */
    constructor(
        private http: HttpClient,
        private logger: Logger,
        private httpRespService: HttpResponseService
    ) { }

    /**
     * Load Application Settings
     *
     * @returns
     * @memberof SettingsService
     */
    load() {
        let headers = new HttpHeaders();
        headers.set('Cache-Control', 'no-cache');
        headers.set('Pragma', 'no-cache');
        return new Promise(resolve => {
            this.http
                .get(`res/_settings.json`, { headers: headers })
                .subscribe(
                    (config: IConfig) => {
                        this.config = config;
                        resolve(true);
                    },
                    (error) => this.httpRespService.handleError,
                    () => this.logger.trace('Settings loaded')
                );
        });
    }

    /**
     * Read settings
     *
     * @returns
     *
     * @memberOf SettingsService
     */
    get() {
        return this.config;
    }
}