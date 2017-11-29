import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionsComponent }  from './training/components/interactions/interactions.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // Components
  // Two-way bindings 1
  prop = 1;

  // Two-way bindings 2
  fontSizePx = 10;

  // Life cycle hooks
  id = 1;
  label = "test";

  // Interactions
  interCode = "A";
  interLabel = "test";
  interSetter = "    qsdsdqsd";
  interAccept = "";
  interOnAccept= (accept: boolean) : void=> {
    this.interAccept = accept ? "Oui" : "Non";
  }
  @ViewChild(InteractionsComponent)
  private interactionsComponent: InteractionsComponent;
  interViewChild = "";
  ngAfterViewInit() {
    this.interViewChild = this.interactionsComponent.hello;
  }
}
