import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  usersAsync: User[];
  selectedUser: User;

  image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    this.userService.getUsersAsync()
      .subscribe(
        (data: User[]) => this.usersAsync = data,
        (error) => console.log(error)
      );
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
