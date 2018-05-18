import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';

// Services
import { Logger } from '../services/logger.service';

/**
 * App global javascript error handler
 *
 * @export
 * @class GlobalErrorHandler
 * @implements {ErrorHandler}
 */
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    /**
     * Creates an instance of GlobalErrorHandler.
     * @param {Injector} injector
     * @param {NgZone} zone
     * @memberof GlobalErrorHandler
     */
    constructor(
        private injector: Injector,
        private zone: NgZone
    ) { }

    /**
     * Handle global errors
     *
     * @param {any} error
     * @memberof GlobalErrorHandler
     */
    handleError(error) {
        const logger = this.injector.get(Logger);
        const router = this.injector.get(Router);
        logger.error(error);
    }
}