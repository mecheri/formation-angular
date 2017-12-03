import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Training
// Components
import { AppComponent } from './app.component';
import { SizerComponent } from './training/components/binding/sizer.component';
import { HooksComponent } from './training/components/hooks/hooks.component';
import { InteractionsComponent } from './training/components/interactions/interactions.component';

// Directives
import { HighlightDirective } from './training/directives/highlight.directive';
import { InputMaxLengthDirective } from './training/directives/input-max-length.directive';

// Pipes
import { ExponentialPipe } from './training/pipes/exponential.pipe';

// Forms
import { DemoFormComponent } from './training/forms/demo-form.component';
import { DemoReactFormComponent } from './training/forms/demo-react-form.component';
import { ForbiddenValidatorDirective } from './training/forms/forbidden-validator.directive';
import { DemosComponent } from './training/di/demos.component';

// Services
import { DemoService } from './training/di/demo.service';
import { Logger } from './training/di/logger.service';

// Http
import { DemoInterceptor } from './training/http/demo.interceptor';

// Navigation
// TODO

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    HooksComponent,
    SizerComponent,
    InteractionsComponent,
    HighlightDirective,
    InputMaxLengthDirective,
    ExponentialPipe,
    DemoFormComponent,
    DemoReactFormComponent,
    ForbiddenValidatorDirective,
    DemosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DemoService,
    Logger,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
