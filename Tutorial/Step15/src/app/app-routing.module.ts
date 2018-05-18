import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule',
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule',
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule'
  },
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
