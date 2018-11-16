import { Injectable, Injector, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as Hjson from 'hjson';

/**
 * Service to handle global application resources
 *
 * @export
 * @class ResourcesService
 */
@Injectable()
export class ResourcesService {

    private _rsc: any;

    get rsc(): any {
        return this._rsc;
    }

    /**
     * Creates an instance of ResourcesService.
     * @param {HttpClient} http
     * @param {Injector} injector
     * @memberof ResourcesService
     */
    constructor(
        private http: HttpClient,
        private injector: Injector,
    ) { }

    /**
     * Load localized resources file - by default the current app locale is used
     *
     * @param {string} [locale]
     * @memberof ResourcesService
     */
    load(locale?: string): void {
        let currentLocale = this.injector.get(LOCALE_ID).split('-')[0];
        if (locale) { currentLocale = locale.split('-')[0]; }

        const headers = new HttpHeaders()
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache');

        this.http.get(`resources/resources.${currentLocale}.hjson`, { headers: headers, responseType: 'text' }).subscribe(
            res => this._rsc = Hjson.parse(res),
            (error) => { throw error; },
            () => console.log('Resources loaded')
        );
    }
}
