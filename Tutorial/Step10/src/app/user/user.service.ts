import { Injectable } from '@angular/core';
// RxJS
import { Observable } from 'rxjs/Rx';

import { User } from './user';

export const USERS: User[] = [
  {
    id: 1,
    username: 'm.mecheri',
    password: 'test',
    email: 'mehdi.mecheri@viveris.fr',
    firstname: 'Mehdi',
    lastname: 'Mecheri',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 2,
    username: 'l.messi',
    password: 'test',
    email: 'lionel.messi@barca.es',
    firstname: 'Lionel',
    lastname: 'Messi',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 3,
    username: 'c.ronaldo',
    password: 'test',
    email: 'cristiano.ronaldo@real.es',
    firstname: 'Cristiano',
    lastname: 'Ronaldo',
    birthdate: new Date(2018, 5, 22)
  },
  {
    id: 4,
    username: 'j.neymarr',
    password: 'test',
    email: 'neymar.jr@psg.fr',
    firstname: 'Neymar',
    lastname: 'JR',
    birthdate: new Date(2018, 5, 22)
  }
];

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return Observable.of(USERS);
  }

  getUser(id: number): Observable<User> {
    return Observable.of(USERS.find(user => user.id === id));
  }
}
