import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Template & Bindings
import { SizerComponent } from './binding/sizer.component';

// Components
import { HooksComponent } from './components/hooks/hooks.component';
import { InteractionsComponent } from './components/interactions/interactions.component';

// Directives
import { HighlightDirective } from './directives/highlight.directive';
import { InputMaxLengthDirective } from './directives/input-max-length.directive';

// Pipes
import { ExponentialPipe } from './pipes/exponential.pipe';

// Forms
import { TemplateDrivenFormComponent } from './forms/template-driven-form.component';
import { ReactiveFormComponent } from './forms/reactive-form.component';
import { ForbiddenValidatorDirective } from './forms/forbidden-validator.directive';

// Services
import { DemosComponent } from './di/demos.component';
import { DemoService } from './di/demo.service';
import { Logger } from './di/logger.service';

// Http
import { DemoInterceptor } from './http/demo.interceptor';

// Navigation
import { DemoListComponent } from './navigation/demo-list.component';
import { DemoDetailComponent } from './navigation/demo/demo-detail.component';
import { DemoViewComponent } from './navigation/demo/demo-view.component';
import { DemoEditComponent } from './navigation/demo/demo-edit.component';
import { PageNotFoundComponent } from './navigation/page-not-found.component';
import { DemoGuard } from './navigation/guards/demo-guard';
import { SaveFormsGuard } from './navigation/guards/save-forms-guard';

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
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ForbiddenValidatorDirective,
    DemosComponent,
    DemoListComponent,
    DemoDetailComponent,
    DemoViewComponent,
    DemoEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DemoService,
    Logger,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true,
    },
    DemoGuard,
    SaveFormsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
