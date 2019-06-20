import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './features/home/home.module#HomeModule',
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: './features/user/user.module#UserModule',
        canActivate: [AuthGuard]
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