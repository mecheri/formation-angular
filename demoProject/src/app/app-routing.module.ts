import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

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
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }