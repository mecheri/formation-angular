import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

// Components
import { DemoListComponent } from './navigation/demo-list.component';
import { DemoDetailComponent } from './navigation/demo/demo-detail.component';
import { DemoViewComponent } from './navigation/demo/demo-view.component';
import { DemoEditComponent } from './navigation/demo/demo-edit.component';
import { PageNotFoundComponent } from './navigation/page-not-found.component';

// Guards
import { DemoGuard } from './navigation/guards/demo-guard';
import { SaveFormsGuard } from './navigation/guards/save-forms-guard';

const appRoutes: Routes = [
  {
    path: 'demo-list',
    component: DemoListComponent,
    canActivate: [DemoGuard]
  },
  {
    path: 'demo-detail',
    component: DemoDetailComponent,
    canActivateChild: [DemoGuard],
    children: [
      { path: '', redirectTo: 'view/:id', pathMatch: 'full' },
      { path: 'view/:id', component: DemoViewComponent },
      { path: 'edit/:id', component: DemoEditComponent, canDeactivate: [SaveFormsGuard] }
    ]
  },
  {
    path: 'demo-from-lazy-module',
    loadChildren: './modules/demo/demo.module#DemoModule', // Lazy load
  },
  {
    path: '',
    redirectTo: '/demo-list',
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