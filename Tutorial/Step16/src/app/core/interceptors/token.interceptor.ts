import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

// RxJS
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// Services
import { MixinService } from './../services/mixin.service';
import { AuthService } from './../services/auth.service';

/**
 * Application auth token Interceptor
 *
 * @export
 * @class TokenInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    private _addAuthHeader(request) {
        const auth = this.injector.get(AuthService);
        if (!auth.getToken()) { return request; }
        return request.clone({ setHeaders: { 'Authorization': `Bearer ${auth.getToken()}`, 'Content-Type': 'application/json; charset=utf-8' } });
    }

    /**
     * Creates an instance of TokenInterceptor.
     * @param {Injector} injector
     * @param {MixinService} mixinService
     * @memberof TokenInterceptor
     */
    constructor(
        private injector: Injector,
        private mixinService: MixinService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this._addAuthHeader(req);

        return next
            .handle(req)
            .pipe(
                tap((ev: HttpEvent<any>) => { return; }),
                catchError(response => {
                    if (response instanceof HttpErrorResponse
                        && !/\/Auth/.test(req.url)) {
                        if ([401, 403].includes(response.status)) {
                            this.mixinService.clearLocalStorageData();
                            this.injector.get(Router).navigate(['login']);
                            return;
                        }
                    }
                    return next.handle(req);
                })
            );
    }
}