import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpHeaders, HttpRequest, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

// RxJS
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

// Environment
import { environment } from './../../../../environments/environment';

// Services
import { MixinService } from './../services/mixin.service';
import { SettingsService } from './../services/settings.service';

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
            .do((ev: HttpEvent<any>) => { return; })
            .catch(response => {
                if (response instanceof HttpErrorResponse
                    && !/\/Auth/.test(req.url)) {
                    if ([401, 403].includes(response.status)) {
                        this.mixinService.clearLocalStorageData();
                        const settingsService = this.injector.get(SettingsService);
                        this.injector.get(Router).navigate(['login']);
                        return;
                    }
                }
                return next.handle(req);
            });
    }
}