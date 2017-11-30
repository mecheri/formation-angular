import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { InteractionsComponent } from './training/components/interactions/interactions.component';

import { InteractionsService } from './training/components/interactions/interactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InteractionsService]
})
export class AppComponent implements AfterViewInit {
  //#region Components
  // Two-way bindings 1
  prop = 1;

  // Two-way bindings 2
  fontSizePx = 10;

  // Life cycle hooks
  id = 1;
  label = "test";

  // Interactions
  interEx = 3;
  interCode = "A";
  interLabel = "test";
  interSetter = "    qsdsdqsd";
  interAccept = "";
  interOnAccept = (accept: boolean): void => {
    this.interAccept = accept ? "Oui" : "Non";
  }
  @ViewChild(InteractionsComponent)
  private interactionsComponent: InteractionsComponent;
  interViewChild = "";
  ngAfterViewInit() {
    if (this.interactionsComponent) {
      this.interViewChild = this.interactionsComponent.hello;
    }
  }

  dataFromParent = "data from parent";
  dataFromChild = "";
  constructor(private interService: InteractionsService) {
    interService.broadcastChildStream$.subscribe(
      dataFromChild => {
        this.dataFromChild = dataFromChild;
      }
    );
  }
  broadcastParent() {
    this.interService.broadcastParent(this.dataFromParent);
  }
  //#endregion

  //#region Directives
  directive = {
    array: ['A', 'B', 'C'],
    code: 'B'
  }
  //#endregion

  //#region Pipes
  //#endregion

  //#region Forms
  //#endregion
}