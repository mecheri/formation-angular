import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: './features/register/register.module#RegisterModule',
  },
  {
    path: '',
    loadChildren: './features/index/index.module#IndexModule',
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
