import { Component, OnInit } from '@angular/core';
import { User } from './user';

export const USERS: User[] = [
  {
    id: 1,
    username: 'mehdi',
    password: 'pa$$word',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    username: 'leo',
    password: 'pa$$word',
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    username: 'cristiano',
    password: 'pa$$word',
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
    username: 'neymar',
    password: 'pa$$word',
    email: 'neymar.jr@psg.fr',
    firstname: 'Neymar',
    lastname: 'JR',
    birthdate: new Date(2018, 5, 22)
  }
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

  users: User[];

  constructor() { }

  ngOnInit() {
    this.users = USERS;
  }

  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}