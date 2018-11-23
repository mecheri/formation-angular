import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

// Components
import { RegisterComponent } from './components/register.component';

// Routing Module
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
    imports: [
        SharedModule,
        RegisterRoutingModule
    ],
    declarations: [
        RegisterComponent
    ],
    providers: []
})
export class RegisterModule { }
