import { Component, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

// Services
import { Logger } from '../services/logger.service';

/**
 * http Response handler service
 *
 * @export
 * @class HttpResponseService
 */
@Injectable({
    providedIn: 'root',
})
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
     * @param {HttpErrorResponse} error
     * @returns
     * @memberof HttpResponseService
     */
    handleError(error: HttpErrorResponse) {
        this.logger = new Logger();
        let msgError = error.error.message;
        // return an observable with a user-facing error message
        this.logger.error(msgError);
        return throwError(msgError);
    };
}