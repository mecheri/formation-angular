import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'interactions',
  template: `
   <div>{{code}}</div>
   <div>{{name}}</div>
   <div>{{prop}}</div>

   <button (click)="accept(true)">OK</button>
   <button (click)="accept(false)">KO</button>

 `
})
export class InteractionsComponent implements OnChanges {
  // 01
  @Input() code: string;
  @Input('label') name: string;

  // 02
  private _prop = '';
  @Input()
  set prop(data: string) {
    this._prop = (data && data.trim()) || '<no data found>';
  }
  get prop(): string { return this._prop; }

  // 03
  ngOnChanges(changes: SimpleChanges) {
    console.log('---> OnChanges fires');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  // 04
  @Output() onAccept = new EventEmitter<boolean>();
  accept(accept: boolean) {
    this.onAccept.emit(accept);
  }

  // 05
  hello = "Hello World";
}