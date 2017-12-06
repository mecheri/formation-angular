import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
// import { AppRoutingModule }   from './app-routing.module';

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
import { DemoComponent } from './training/navigation/demo.component';
import { DemoDetailComponent } from './training/navigation/demo-detail.component';
import { DemoViewComponent } from './training/navigation/demo-view.component';
import { DemoEditComponent } from './training/navigation/demo-edit.component';
import { PageNotFoundComponent } from './training/navigation/page-not-found.component';
import { AuthGuard } from './training/navigation/auth-guard';
import { SaveFormsGuard } from './training/navigation/save-forms-guard';
const appRoutes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [AuthGuard],
    data: { title: 'Demo List' }
  },
  {
    path: 'demo-detail',
    component: DemoDetailComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'view/:id', pathMatch: 'full' },
      { path: 'view/:id', component: DemoViewComponent },
      { path: 'edit/:id', component: DemoEditComponent, canDeactivate: [SaveFormsGuard] }
    ]
  },
  {
    path: 'demo-from-custom-module',
    loadChildren: './training/modules/demo/demo.module#DemoModule', // Lazy load
  },
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

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
    DemosComponent,
    DemoComponent,
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
    // AppRoutingModule
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- pour le debugage
    )
  ],
  providers: [
    DemoService,
    Logger,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true,
    },
    AuthGuard,
    SaveFormsGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
