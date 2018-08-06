import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Services
import { HttpResponseService } from '../../core/services/http-response.service';

// Models
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private httpResponseService: HttpResponseService,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User`)
      .pipe(
        map((resp) => resp as User[]),
        catchError(this.httpResponseService.handleError)
      );
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(
        map((resp) => resp as User),
        catchError(this.httpResponseService.handleError)
      );
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`https://aspnetcoreapistarter.azurewebsites.net/api/User`, user)
      .pipe(catchError(this.httpResponseService.handleError))
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${user.id}`, user)
      .pipe(catchError(this.httpResponseService.handleError))
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`https://aspnetcoreapistarter.azurewebsites.net/api/User/${id}`)
      .pipe(catchError(this.httpResponseService.handleError))
  }
}
