import { Component, EventEmitter, Input, Output, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../user/user';
import { Interaction07Service } from '../interaction07.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnChanges, OnDestroy {

  //#region Interaction 01
  // Parent vers l'enfant avec le décorateur "Input"
  @Input() user: User;
  @Input('avatar') image: User;
  //#endregion

  //#region Interaction 02
  // Parent vers l'enfant avec un setter de la propriété "Input"
  private _image2 = '';
  @Input('avatar2')
  set image2(data: string) {
    this._image2 = (data && data.trim()) || '<no data found>';
  }
  get image2(): string { return this._image2; }
  //#endregion

  //#region Interaction 03
  // Parent vers l'enfant avec ngOnChanges()
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  //#endregion

  //#region Interaction 04
  // Parent à l'écoute d'un événement enfant avec le décorateur "Output"
  @Output() onAction = new EventEmitter<string>();
  action(msg: string) {
    this.onAction.emit(msg);
  }
  //#endregion

  //#region Interaction 05, 06
  // 5. Parent interagit avec l'enfant via une variable locale
  // 6. Parent appelle un @ViewChild()
  hello = 'Hello from UserDetailComponent';
  //#endregion

  //#region Interaction 07
  // Parent et enfants communiquent via un service
  subscription: Subscription;
  constructor(private service: Interaction07Service) {
    this.subscription = service.broadcastParentStream$.subscribe(
      dataFromParent => console.log(dataFromParent));
  }
  broadcastChild() {
    this.service.broadcastChild('Hello from child');
  }
  ngOnDestroy() {
    // pour eviter les fuites memoire
    this.subscription.unsubscribe();
  }
  //#endregion
}
