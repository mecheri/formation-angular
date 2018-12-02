import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './components/register.component';

@NgModule({
  imports: [
    SharedModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
