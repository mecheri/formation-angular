import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {

  @Input('data') user: User;
  @Input() display: boolean;
  @Output() onAction = new EventEmitter<boolean>();

  constructor(
    private notifier: NotifierService,
    private userService: UserService
  ) { }

  ngOnInit() { }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        () => {
          this.onAction.emit(true);
          this.notifier.notify('success', 'Operation successfully done !');
        },
        error => this.notifier.notify('error', error)
      );
  }
}
