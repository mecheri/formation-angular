import { Injectable } from '@angular/core';
// RxJS
import { Observable, of } from 'rxjs';

import { User } from './user';

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

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }
}
