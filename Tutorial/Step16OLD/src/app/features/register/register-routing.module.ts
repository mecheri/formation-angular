import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { RegisterComponent } from './components/register.component';

const registerRoutes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(registerRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RegisterRoutingModule { }