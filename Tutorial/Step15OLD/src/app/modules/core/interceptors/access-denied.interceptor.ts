import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

// RxJS
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

// Services
import { MixinService } from './../services/mixin.service';

/**
 * Application access denied Interceptor
 *
 * @export
 * @class AccessDeniedInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class AccessDeniedInterceptor implements HttpInterceptor {

    /**
     * Creates an instance of AccessDeniedInterceptor.
     * @param {Injector} injector
     * @param {MixinService} mixinService
     * @memberof AccessDeniedInterceptor
     */
    constructor(
        private injector: Injector,
        private mixinService: MixinService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
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