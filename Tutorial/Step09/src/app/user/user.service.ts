import { Injectable } from '@angular/core';
// RxJS
import { Observable } from 'rxjs/Rx';

import { User } from './user';

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

@Injectable()
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return Observable.of(USERS);
  }

  getUser(id: number): Observable<User> {
    return Observable.of(USERS.find(hero => hero.id === id));
  }
}
