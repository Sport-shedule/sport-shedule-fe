import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, first, map } from 'rxjs/operators';
import { EMPTY, Observable, throwError as _throw } from 'rxjs';
import { CurrentUserService } from './current-user.service';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ApiService {
  private responseObserve: 'response' = 'response';
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient,
              private currentUser: CurrentUserService) {
  }

  private static get jwt(): HttpHeaders {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      return new HttpHeaders().set('Authorization', 'Bearer_' + currentUser.token);
    }
  }

  post<T>(url: string, body: any): Observable<T> {
    const options = { headers: ApiService.jwt, observe: this.responseObserve };

    return this.http.post<T>(this.API_URL + url, body, options).pipe(
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error)));
  }

  put<T>(url: string, body: any | null): Observable<T> {
    const options = { headers: ApiService.jwt, observe: this.responseObserve };

    return this.http.put<T>(this.API_URL + url, body, options).pipe(
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  patch<T>(url: string, body: any | null): Observable<T> {
    const options = { headers: ApiService.jwt, observe: this.responseObserve };

    return this.http.patch<T>(this.API_URL + url, body, options).pipe(
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  get<T>(url: string): Observable<T> {
    const options = { headers: ApiService.jwt, observe: this.responseObserve };

    return this.http.get<T>(this.API_URL + url, options).pipe(
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  delete<T>(url: string): Observable<T> {
    const options = { headers: ApiService.jwt, observe: this.responseObserve };

    return this.http.delete<T>(this.API_URL + url, options).pipe(
      first(),
      map(response => response.body),
      catchError(error => this.handleError(error))
    );
  }

  private handleError<T>(error: HttpResponse<T>) {
    if (!ApiService.jwt) {
      return EMPTY;
    }
    if (error.status === 401 && this.currentUser) {
      this.currentUser.logout('?????????? ??????????????????');
    }
    // TODO: fix this crutch: https://github.com/angular/angular/pull/19958
    if (error.status !== 200) {
      return _throw(error);
    }
    return EMPTY;
  }
}
