import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Spinner state Interface
 *
 * @export
 * @interface SpinnerState
 */
export interface SpinnerState {
    show: boolean;
}

/**
 * Application Spinner Service
 *
 * @export
 * @class Spinner
 */
@Injectable({
    providedIn: 'root',
})
export class Spinner {
    private spinnerSubject = new Subject<SpinnerState>();

    spinnerState = this.spinnerSubject.asObservable();

    constructor() { }

    show() {
        this.spinnerSubject.next(<SpinnerState>{ show: true });
    }
    hide() {
        this.spinnerSubject.next(<SpinnerState>{ show: false });
    }
}