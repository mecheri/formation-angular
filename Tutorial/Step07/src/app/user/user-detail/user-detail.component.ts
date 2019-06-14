import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { User } from '../user';
import { Interaction07Service } from 'src/app/interaction07.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  @Input() user: User;
  @Input('avatar') image: string;

  private _image2 = '';
  @Input('avatar2') set image2(data: string) {
    this._image2 = (data && data.trim()) || '<no data found>';
  }
  get image2(): string { return this._image2; }

  subscription: Subscription;
  constructor(private service: Interaction07Service) {
    this.subscription = service.broadcastParentStream$.subscribe((dataFromParent) => console.log(dataFromParent));
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit() {
  }

  @Output() onAction = new EventEmitter<string>();
  action(msg: string) {
    this.onAction.emit(msg);
  }

  public hello = 'Hello from User-detail-component local variable';

  broadcastChild() {
    this.service.broadcastChild('Hello from child');
  }

  ngOnDestroy() {
    // do no forget to implement OnDestroy interface
    this.subscription.unsubscribe(); // prevent memory leak
  }

}
