import { NgModule, Optional, SkipSelf, ErrorHandler, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';

// Prevent re-import of the core module
import { throwIfAlreadyLoaded } from './module-import-guard';

// Interceptors
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';

// Services
import { SettingsService } from './services/settings.service';
import { ResourcesService } from './services/resources.service';

// Handlers
import { GlobalErrorHandler } from './handlers/global-error.handler';

// Environment
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          distance: 35
        }
      }
    })
  ],
  exports: [
    HttpClientModule,
    NotifierModule
  ],
  providers: [
    SettingsService,
    {
      provide: LOCALE_ID,
      useValue: environment.locale
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (config: SettingsService) => () => config.load(),
      deps: [SettingsService],
      multi: true
    },
    ResourcesService,
    {
      provide: APP_INITIALIZER,
      useFactory: (resources: ResourcesService) => () => resources.load(),
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
