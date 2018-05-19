import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../../modules/shared/shared.module';

// Interceptors
import { TokenJwtInterceptor } from './interceptors/token-jwt.interceptor';
import { AccessDeniedInterceptor } from './interceptors/access-denied.interceptor';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

// Services
import { Logger } from './services/logger.service';
import { Spinner } from './services/spinner.service';
import { Constants } from './services/constants.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HttpResponseService } from './services/http-response.service';
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';
import { MixinService } from './services/mixin.service';
import { EventService } from './services/event.service';
import { NotificationsService } from 'angular2-notifications';

// Handlers
import { GlobalErrorHandler } from './handlers/global-error.handler';

// Factories
import { ResourcesFactory } from './factories/resources.factory';
import { SettingsFactory } from './factories/settings.factory';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule
  ],
  exports: [
    HttpClientModule,
    SharedModule
  ],
  providers: [
    Logger,
    Spinner,
    Constants,
    AuthService,
    AuthGuardService,
    HttpResponseService,
    NotificationsService,
    MixinService,
    EventService,
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: SettingsFactory,
      deps: [SettingsService],
      multi: true
    },
    ResourcesService,
    {
      provide: APP_INITIALIZER,
      useFactory: ResourcesFactory,
      deps: [ResourcesService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenJwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccessDeniedInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
