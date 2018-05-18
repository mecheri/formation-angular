import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Vendor modules
import { BreadcrumbModule, CalendarModule, DataTableModule, ToolbarModule, DialogModule } from 'primeng/primeng';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BsDropdownModule, CollapseModule } from 'ngx-bootstrap';

// Custom components
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CalendarModule,
    DataTableModule,
    ToolbarModule,
    DialogModule,
    SimpleNotificationsModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  declarations: [
    NavbarComponent,
    SpinnerComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    CalendarModule,
    ToolbarModule,
    DialogModule,
    DataTableModule,
    SimpleNotificationsModule,
    BsDropdownModule,
    CollapseModule,
    NavbarComponent,
    SpinnerComponent,
  ],
  providers: []
})
export class SharedModule { }