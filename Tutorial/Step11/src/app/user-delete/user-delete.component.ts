import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { NotificationsService } from 'angular2-notifications';

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
    private userService: UserService,
    private notifService: NotificationsService
  ) { }

  ngOnInit() { }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        resp => {
          this.notifService.success(null, 'Success', { timeOut: 3000 });
          this.onAction.emit(true);
        },
        error => this.notifService.error('Erreur', error));
  }
}
