import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Training
// Components
import { AppComponent } from './app.component';
import { SizerComponent } from './training/components/binding/sizer.component';
import { HooksComponent } from './training/components/hooks/hooks.component';
import { InteractionsComponent } from './training/components/interactions/interactions.component';

// Directives
import { HighlightDirective } from './training/directives/highlight.directive';
import { InputMaxLengthDirective } from './training/directives/input-max-length.directive';

// Pipes
// TODO

// Forms
// TODO

// Http
// TODO

// Navigation
// TODO

// Services
// TODO

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    HooksComponent,
    SizerComponent,
    InteractionsComponent,
    HighlightDirective,
    InputMaxLengthDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
