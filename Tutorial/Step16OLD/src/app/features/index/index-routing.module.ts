import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

import { AuthGuard } from './../../core/services/auth.guard';

const indexRoutes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
      },
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(indexRoutes)
  ],
  exports: [RouterModule]
})
export class IndexRoutingModule { }