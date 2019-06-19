import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getUsers(): User[] {
    return USERS;
  }

  // The UserService must wait for the server to respond
  // getUsers() cannot return immediately with data,
  // and the browser will not block while the service waits
  getUsersAsync(): Observable<User[]> {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(USERS);
        observer.complete();
      }, 3000);

      try {
        // throw Error("Boom");
      } catch (e) {
        observer.error(e);
      }
    });

    // return of(USERS);
  }
}