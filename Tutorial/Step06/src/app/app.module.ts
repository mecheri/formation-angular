import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
import { InputMaxLengthDirective } from './input-max-length.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ExponentialPipe,
    HighlightDirective,
    InputMaxLengthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
