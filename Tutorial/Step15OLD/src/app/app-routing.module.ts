import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './modules/core/services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule',
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
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
