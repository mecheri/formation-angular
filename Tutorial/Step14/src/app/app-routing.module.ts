import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './features/home/home.module#HomeModule'
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'user',
        loadChildren: './features/user/user.module#UserModule'
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