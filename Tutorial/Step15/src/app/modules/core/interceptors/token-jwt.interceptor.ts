import { Injectable, Injector } from '@angular/core';
import {
    HttpInterceptor,
    HttpHandler,
    HttpHeaders,
    HttpRequest,
    HttpResponse,
    HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthService } from './../services/auth.service';
import { ResourcesService } from './../services/resources.service';

/**
 * Application Http token JWT Interceptor
 *
 * @export
 * @class TokenJwtInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class TokenJwtInterceptor implements HttpInterceptor {

    /**
     * Creates an instance of TokenJwtInterceptor.
     * @param {AuthService} authService
     * @memberof TokenJwtInterceptor
     */
    constructor(
        private injector: Injector
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.injector.get(AuthService);
        const token = auth.getToken();
        if (token) {
            const rsc = this.injector.get(ResourcesService);
            req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json; charset=utf-8') });
        }
        return next.handle(req);
    }
}