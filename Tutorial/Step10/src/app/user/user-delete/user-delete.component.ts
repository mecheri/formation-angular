import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  @Input('data') user: User;
  @Input() display: boolean;
  @Output() onAction = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.onAction.emit(true);
  }
}
