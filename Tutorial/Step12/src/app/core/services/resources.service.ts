import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
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
     * @memberof ResourcesService
     */
    constructor(private http: HttpClient) { }

    /**
     * Load localized resources file - by default the current app locale is used
     *
     * @param {string} [locale]
     * @memberof ResourcesService
     */
    load() {
        const headers = new HttpHeaders()
            .append('Cache-Control', 'no-cache')
            .append('Pragma', 'no-cache');

        return new Promise((resolve, reject) => {
            this.http.get(`assets/resources/resources.hjson`, { headers: headers, responseType: 'text' })
                .pipe(catchError((error) => { throw error; }))
                .subscribe((res_data) => {
                    resolve(res_data);
                    this._rsc = Hjson.parse(res_data);
                    console.log('Resources loaded');
                })
        });
    }
}
