import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './../../modules/shared/shared.module';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
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

// Environment
import { environment } from '../../../environments/environment';

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
      provide: LOCALE_ID,
      useValue: environment.locale
    },
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
      useClass: TokenInterceptor,
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
