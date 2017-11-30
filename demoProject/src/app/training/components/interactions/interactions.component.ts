import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';

import { InteractionsService } from './interactions.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'interactions-demo',
  template: `
    <div *ngIf="ex===1">{{code}} , {{name}}</div>

    <div *ngIf="ex===2">{{prop}}</div>

    <div *ngIf="ex===4">
    <button (click)="accept(true)">OK</button>
    <button (click)="accept(false)">KO</button>
    </div>

    <div *ngIf="ex===7">
    <button (click)="broadcastChild()">Broadcast from child</button>
    <span>{{dataFromParent}}</span>
    </div>
 `
})
export class InteractionsComponent implements OnChanges, OnDestroy {
  @Input() ex: number;

  //#region 01
  @Input() code: string;
  @Input('label') name: string;
  //#endregion

  //#region 02
  private _prop = '';
  @Input()
  set prop(data: string) {
    this._prop = (data && data.trim()) || '<no data found>';
  }
  get prop(): string { return this._prop; }
  //#endregion

  //#region 03
  ngOnChanges(changes: SimpleChanges) {
    console.log('---> OnChanges fires');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  //#endregion

  //#region 04
  @Output() onAccept = new EventEmitter<boolean>();
  accept(accept: boolean) {
    this.onAccept.emit(accept);
  }
  //#endregion

  //#region 05
  hello = "Hello World";
  //#endregion

  //#region 07
  dataFromParent = "";
  dataFromChild = "data from child";
  subscription: Subscription;
  constructor(private interService: InteractionsService) {
    this.subscription = interService.broadcastParentStream$.subscribe(
      dataFromParent => {
        this.dataFromParent = dataFromParent;
      });
  }
  broadcastChild() {
    this.interService.broadcastChild(this.dataFromChild);
  }
  ngOnDestroy() {
    // pour eviter les fuites memoire
    this.subscription.unsubscribe();
  }
  //#endregion
}