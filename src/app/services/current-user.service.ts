import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AuthenticationService } from './authentication.service';

export class UserAccount {
  username: string;
  password: string;
}

@Injectable()
export class CurrentUserService implements OnDestroy {
  subject: BehaviorSubject<UserAccount> = new BehaviorSubject<UserAccount>(null!);
  authenticationMessage: string;

  private authSubscription: Subscription;
  private logoutSubscription: Subscription;
  private redirectSubject: Subscription;
  private resetUserSubscription: Subscription;

  constructor(private auth: AuthenticationService,
              private router: Router) {
    this.authSubscription = this.auth.subject.subscribe((usr) => {
      this.user = usr;
    });

    const item  = localStorage.getItem('currentUser') as string;
    const user = JSON.parse(item);
    if (!user || this.tokenExpired(user.token)) {
      return;
    }

    this.user = user;
  }

  get user() {
    return this.subject.value;
  }

  set user(value: UserAccount) {
    this.subject.next(value);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
    this.logoutSubscription.unsubscribe();
    this.redirectSubject.unsubscribe();
    this.resetUserSubscription.unsubscribe();
  }

  logout(message: string) {
    if (!this.user && !localStorage.getItem('currentUser')) {
      return;
    }

    localStorage.removeItem('currentUser');
    this.authenticationMessage = message;
    this.router.navigate(['/login']);
    this.user = null!;
  }

  private tokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
}
