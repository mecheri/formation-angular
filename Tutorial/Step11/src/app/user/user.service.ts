import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
    let msg = error.error.message;
    // return an observable with a user-facing error message
    console.error(msg);
    return throwError(msg);
  };
}