import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

// Components
import { LoginComponent } from './components/login.component';

// Routing Module
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        SharedModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: []
})
export class LoginModule { }
