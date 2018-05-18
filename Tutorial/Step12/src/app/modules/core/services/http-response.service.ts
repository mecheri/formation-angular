import { Component, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

// Services
import { Logger } from '../services/logger.service';

/**
 * http Response handler service
 *
 * @export
 * @class HttpResponseService
 */
@Injectable()
export class HttpResponseService {

    private logger: Logger;

    /**
    * Creates an instance of HttpErrorService.
    * @memberof HttpErrorService
    */
    constructor() { }

    /**
    * Handle Http Errors Responses
    *
    * @param {*} resp
    * @returns {Observable<any>}
    * @memberof HttpResponseService
    */
    handleError(resp: any): Observable<any> {
        let respBody, reject: string;
        this.logger = new Logger();
        this.logger.error(resp.error.message);
        return Observable.throw(resp.error.message);
    }
}