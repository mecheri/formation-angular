import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// RxJS
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from '../models/user';

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

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    // return of(USERS);
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User`)
      .pipe(
        map((resp) => resp as User[]),
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<User> {
    // return of(USERS.find(user => user.id === id));
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(
        map((resp) => resp as User),
        catchError(this.handleError)
      );
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`https://aspnetcoreapistarter.azurewebsites.net/api/User`, user)
      .pipe(catchError(this.handleError))
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${user.id}`, user)
      .pipe(catchError(this.handleError))
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // // Récupération de données JSON
  // this.http.get('https://api.github.com/emojis')
  //   .subscribe(data => {
  //     console.log(data['hugs']);
  //   });

  // // Vérification du type de la réponse
  // interface EmojisResponse {
  //   hugs: string;
  // }
  // this.http.get<EmojisResponse>('https://api.github.com/emojis')
  //   .subscribe(data => {
  //     console.log(data.hugs);
  //   });

  // // Récupération de la totalité de la réponse pas le body uniquement
  // this.http.get('https://api.github.com/emojis', { observe: 'response' })
  //   .subscribe(resp => {
  //     console.log(resp);
  //   });

  // // Gestion des erreurs
  // this.http.get('https://api.github.com/emojisqsd')
  //   .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //   );

  // // Récupération de données non-JSON
  // this.http.get('file.txt', { responseType: 'text' })
  //   .subscribe(data => {
  //     console.log(data);
  //   });

  // // Envoyer des données a un serveur
  // // Requete POST
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body)
  //   .subscribe(
  //     data => console.log(data),
  //     error => console.log('Erreur http -->', error)
  //   );

  // // Headers
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body, {
  //     headers: new HttpHeaders().set('Authorization', 'auth-token'),
  //   })
  //   .subscribe();

  // // URL Parameters  
  // const body = { name: 'Mehdi' };
  // this.http
  //   .post('/api/users/add', body, {
  //     params: new HttpParams().set('id', '3'),
  //   })
  //   .subscribe();
}
