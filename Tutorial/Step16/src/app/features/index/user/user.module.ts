import { NgModule } from '@angular/core';
import { SharedModule } from './../../../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserNewComponent,
    UserEditComponent,
    UserDeleteComponent
  ]
})
export class UserModule { }
