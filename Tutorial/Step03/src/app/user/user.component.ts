import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // path: src/app/user/user.component.ts
  user: User = {
    id: 1,
    username: 'test',
    password: 'pa$$word',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  };
  dateFormat = "MM/dd/yy";
  image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

  constructor() { }

  ngOnInit() {
  }

}
