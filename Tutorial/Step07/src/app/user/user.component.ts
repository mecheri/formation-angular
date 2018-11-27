import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from './user';

import { UserDetailComponent } from './user-detail/user-detail.component';
import { Interaction07Service } from '../interaction07.service';

export const USERS: User[] = [
  {
    id: 1,
    username: 'test',
    password: 'pa$$word',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    username: 'test',
    password: 'pa$$word',
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    username: 'test',
    password: 'pa$$word',
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
    username: 'test',
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
export class UserComponent implements OnInit, AfterViewInit {

  users: User[];
  selectedUser: User;
  image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';
  image2 = '        https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

  constructor(private service: Interaction07Service) {
    service.broadcastChildStream$.subscribe((dataFromChild) => console.log(dataFromChild));
  }

  ngOnInit() {
    this.users = USERS;
  }

  broadcastParent() {
    this.service.broadcastParent('Hello from parent');
  }

  @ViewChild(UserDetailComponent) ud: UserDetailComponent;
  ngAfterViewInit() {
    if (this.ud) {
      console.log(this.ud.hello);
    }
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onActionFromUserDetail(msg: string) {
    console.log(msg);
  }
}
