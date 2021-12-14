import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CurrentUserService } from './current-user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private currentUser: CurrentUserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.url.length > 0) {
      if (!!this.currentUser.user) {
        return true;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
