import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Services
import { SettingsService } from '../../../../core/services/settings.service';

// Models
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private settingsService: SettingsService,
  ) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.settingsService.config.apiUrl}/api/User`)
      .pipe(map((resp) => resp as User[]));
  }

  getUser(id: number): Observable<User> {
    return this.http
      .get(`${this.settingsService.config.apiUrl}/api/User/${id}`)
      .pipe(map((resp) => resp as User));
  }

  createUser(user: User): Observable<any> {
    return this.http
      .post(`${this.settingsService.config.apiUrl}/api/User`, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http
      .put(`${this.settingsService.config.apiUrl}/api/User/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`${this.settingsService.config.apiUrl}/api/User/${id}`);
  }
}
