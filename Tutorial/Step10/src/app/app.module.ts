import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// Vendor modules
import { BreadcrumbModule, DataTableModule, DialogModule } from 'primeng/primeng';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    HomeComponent,
    NavbarComponent,
    UserNewComponent,
    UserEditComponent,
    UserDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BreadcrumbModule,
    DataTableModule,
    DialogModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
