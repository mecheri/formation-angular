import { Component, Renderer, ViewChild, SimpleChanges, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;
  userToDelete: User;
  displayDeleteModal: boolean = false;

  bcItems = [
    { label: 'Home', routerLink: '/home' },
    { label: 'Users', }
  ];;

  constructor(
    private router: Router,
    private userService: UserService,
    private notifService: NotificationsService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  onActionDelete(del: boolean) {
    this.displayDeleteModal = false;
    if (del) {
      this.getUsers();
    }
  }
  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (data: User[]) => this.users = data,
        error => this.notifService.error('Erreur', error)
      );
  }

  detail(user: User) {
    this.router.navigate(['user', user.id]);
  }

  add() {
    this.router.navigate(['user', 'add', 'new']);
  }

  edit(user: User) {
    this.router.navigate(['user', 'edit', user.id]);
  }

  showDeleteModal(user: User) {
    this.userToDelete = user;
    this.displayDeleteModal = true;
  }
}
