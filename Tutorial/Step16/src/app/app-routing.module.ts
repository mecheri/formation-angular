import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/index/index.module#IndexModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    loadChildren: './features/register/register.module#RegisterModule',
  },
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, { useHash: true }) // HashLocationStrategy
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
