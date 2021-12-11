import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { EMPTY, Observable, throwError as _throw } from 'rxjs';
import { CurrentUserService } from './current-user.service';
import { OriginUrlService } from './origin-url.service';

@Injectable()
export class ApiService {
  private responseObserve: 'response' = 'response';

  constructor(private http: HttpClient,
              private currentUser: CurrentUserService,
              private originUrl: OriginUrlService) {
  }

  private get jwt(): HttpHeaders {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return new HttpHeaders().set('Authorization', 'Bearer ' + currentUser.token);
    }
  }

  post<T>(url: string, body: any | null): Observable<T> {
    const options = { headers: this.jwt, observe: this.responseObserve };

    return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.post<T>(location + url, body, options)),
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  put<T>(url: string, body: any | null): Observable<T> {
    const options = { headers: this.jwt, observe: this.responseObserve };

    return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.put<T>(location + url, body, options)),
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  patch<T>(url: string, body: any | null): Observable<T> {
    const options = { headers: this.jwt, observe: this.responseObserve };

    return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.patch<T>(location + url, body, options)),
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  get<T>(url: string): Observable<T> {
    const options = { headers: this.jwt, observe: this.responseObserve };

    return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.get<T>(location + url, options)),
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  delete<T>(url: string): Observable<T> {
    const options = { headers: this.jwt, observe: this.responseObserve };

    return this.originUrl.originUrl.pipe(
      switchMap(location => this.http.delete<T>(location + url, options)),
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  private handleError<T>(error: HttpResponse<T>) {
    if (!this.jwt) {
      return EMPTY;
    }
    if (error.status === 401 && this.currentUser) {
      this.currentUser.logout('Токен просрочен');
    }
    // TODO: fix this crutch: https://github.com/angular/angular/pull/19958
    if (error.status !== 200) {
      return _throw(error);
    }
    return EMPTY;
  }
}
