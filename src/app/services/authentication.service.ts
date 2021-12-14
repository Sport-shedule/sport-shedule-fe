import { first, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { OriginUrlService } from './origin-url.service';
import { UserAccount } from './current-user.service';

@Injectable()
export class AuthenticationService {
  subject: Subject<UserAccount> = new Subject<UserAccount>();

  constructor(private http: HttpClient,
              private originUrl: OriginUrlService) {
  }

  login(username: string, password: string) {
    let user = new UserAccount();
    user.username = username;
    user.password = password;
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.subject.next(user);
    /*return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.post<any>(location + '/api/users/authenticate', { username: username, password: password })),
      first(),
      map((response: Object) => {
        // успешно если в ответе есть jwt Токен
        const user = response as any;
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.subject.next(user);
        }
      })
    );*/

  }
}
