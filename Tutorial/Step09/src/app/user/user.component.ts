import { Component, OnInit } from '@angular/core';
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

  bcItems = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Users', }
  ];

  cols = [
    { field: 'id', header: 'ID' },
    { field: 'firstname', header: 'First Name' },
    { field: 'lastname', header: 'Last Name' }
  ];

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(
        (data: User[]) => this.users = data,
        (error) => console.log(error)
      );
  }

  detail(user: User) {
    this.router.navigate(['user', user.id]);
  }
}