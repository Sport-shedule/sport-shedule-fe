import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private currentUser: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.url.length > 0) {
      if (this.currentUser.hasAccess(route.url[0].path)) {
        return true;
      }
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
