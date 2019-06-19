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

  image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
    this.loadUsersAsync();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  loadUsersAsync() {
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