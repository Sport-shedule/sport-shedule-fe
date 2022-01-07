import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserAccount } from './current-user.service';
import { first, map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class AuthenticationService {
  subject: Subject<UserAccount> = new Subject<UserAccount>();
  API_URL = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    let user = new UserAccount();
    user.username = username;
    user.password = password;
    //localStorage.setItem('currentUser', JSON.stringify(user));
    //this.subject.next(user);
    return this.http.post<any>(`${this.API_URL}/login`, { username: username, password: password })
      .pipe(first(),
        map((response: Object) => {
          // успешно если в ответе есть jwt Токен
          const user = response as any;
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.subject.next(user);
          }
        }));
  }
}
