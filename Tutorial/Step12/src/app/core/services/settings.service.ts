import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as Hjson from 'hjson';

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

    private _config: IConfig;

    /**
     * Read settings
     *
     * @readonly
     * @type {IConfig}
     * @memberof SettingsService
     */
    get config(): IConfig {
        return this._config;
    }

    /**
     *Creates an instance of SettingsService.
     * @param {HttpClient} http
     * @memberof SettingsService
     */
    constructor(private http: HttpClient) { }

    /**
     * Load Application Settings
     *
     * @memberof SettingsService
     */
    load() {
        const headers = new HttpHeaders()
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache');

        return new Promise((resolve, reject) => {
            this.http.get(`assets/resources/settings.hjson`, { headers: headers, responseType: 'text' })
                .pipe(catchError((error) => { throw error; })).subscribe((res_data) => {
                    resolve(res_data);
                    this._config = Hjson.parse(res_data);
                    console.log('Settings loaded');
                })
        });
    }
}