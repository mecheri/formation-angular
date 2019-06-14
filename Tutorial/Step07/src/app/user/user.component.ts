import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { User } from './user';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Interaction07Service } from '../interaction07.service';
import { Subscription } from 'rxjs';

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
export class UserComponent implements OnInit, OnDestroy {
  image = 'https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';
  image2 = '               https://cdnjs.cloudflare.com/ajax/libs/emojione/2.2.7/assets/png/1f471-1f3fb.png';

  users: User[];

  subscription: Subscription;
  constructor(private service: Interaction07Service) {
    service.broadcastChildStream$.subscribe((dataFromChild) => console.log(dataFromChild));
  }

  ngOnInit() {
    this.users = USERS;
  }

  selectedUser: User;

  @ViewChild(UserDetailComponent, null) ud: UserDetailComponent;
  onSelect(user: User): void {
    this.selectedUser = user;
    if (this.ud) {
      console.log(this.ud.hello);
    }
  }

  onActionFromUserDetail(msg: string) {
    console.log(msg);
  }

  broadcastParent() {
    this.service.broadcastParent('Hello from parent');
  }

  ngOnDestroy() {
    // do no forget to implement OnDestroy interface
    this.subscription.unsubscribe(); // prevent memory leak
  }
}