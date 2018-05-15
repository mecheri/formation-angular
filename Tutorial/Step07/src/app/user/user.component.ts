import { Component, Renderer, ViewChild, SimpleChanges, OnChanges, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { User } from './user';
import { Interaction07Service } from '../interaction07.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

export const USERS: User[] = [
  {
    id: 1,
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
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

  users: User[];
  selectedUser: User;

  image = 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';
  image2 = '                      https://assets-cdn.github.com/images/icons/emoji/unicode/1f471.png?v8';

  constructor(private service: Interaction07Service) {
    service.broadcastChildStream$.subscribe(
      dataFromChild => console.log(dataFromChild));
  }

  ngOnInit() {
    this.users = USERS;
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onActionFromUserDetail(msg: string) {
    console.log(msg);
  }

  @ViewChild(UserDetailComponent) ud: UserDetailComponent;
  ngAfterViewInit() {
    if (this.ud) {
      console.log(this.ud.hello);
    }
  }

  broadcastParent() {
    this.service.broadcastParent('Hello from parent');
  }
}
