import { Component, Renderer, ViewChild, SimpleChanges, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  selectedUser: User;

  bcItems: any[];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(
        (data: User[]) => this.users = data,
        (error) => console.log(error)
      );

    this.bcItems = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Users', }
    ];
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  detail(user: User) {
    this.router.navigate(['user', user.id]);
  }
}
