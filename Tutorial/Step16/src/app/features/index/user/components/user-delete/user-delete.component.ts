import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { ResourcesService } from '../../../../../core/services/resources.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent implements OnInit {
  rsc: any;

  @Input('data') user: User;
  @Input() display: boolean;
  @Output() onAction = new EventEmitter<boolean>();

  /**
   * Creates an instance of UserDeleteComponent.
   * @param {UserService} userService
   * @param {ResourcesService} rscService
   * @param {NotificationsService} notifService
   * @memberof UserDeleteComponent
   */
  constructor(
    private userService: UserService,
    private notifier: NotifierService,
    private rscService: ResourcesService
  ) { }

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.rsc = this.rscService.rsc.pages.register;
  }

  cancel() {
    this.onAction.emit(false);
  }

  delete() {
    this.userService.deleteUser(this.user.id)
      .subscribe(
        (resp) => {
          this.notifier.notify('success', 'Operation successfully done !');
          this.onAction.emit(true);
        }
      );
  }
}
