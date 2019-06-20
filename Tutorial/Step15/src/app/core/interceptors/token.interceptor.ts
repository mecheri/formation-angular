import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';

// Services
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

    /**
     * Creates an instance of TokenInterceptor.
     * @param {Injector} injector
     * @param {MixinService} mixinService
     * @memberof TokenInterceptor
     */
    constructor(private injector: Injector) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = <AuthService>this.injector.get(AuthService);
        req = auth.addAuthorizationHeader(req);
        return next.handle(req);
    }
}
