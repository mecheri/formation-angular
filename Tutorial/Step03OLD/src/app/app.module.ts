import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ExponentialPipe } from './exponential.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExponentialPipe
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
