import { NgModule } from '@angular/core';
import { SharedModule } from './../../modules/shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './components/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserNewComponent } from './components/user-new/user-new.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

import { UserService } from './services/user.service';

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
  ],
  providers: [UserService]
})
export class UserModule { }
