import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../../modules/shared/shared.module';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

// Interceptors
import { TokenJwtInterceptor } from './interceptors/token-jwt.interceptor';
import { AccessDeniedInterceptor } from './interceptors/access-denied.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

// Services
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';

// Services Vendor
import { NotificationsService } from 'angular2-notifications';

// Factories
import { ResourcesFactory } from './factories/resources.factory';
import { SettingsFactory } from './factories/settings.factory';

// Handlers
import { GlobalErrorHandler } from './handlers/global-error.handler';

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
    NotificationsService,
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
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
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
