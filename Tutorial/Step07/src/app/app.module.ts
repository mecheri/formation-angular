import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { InputMaxLengthDirective } from './input-max-length.directive';

import { Interaction07Service } from './interaction07.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExponentialPipe,
    HighlightDirective,
    InputMaxLengthDirective,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Interaction07Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
