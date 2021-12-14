import { Component } from '@angular/core';
import { CurrentUserService } from './services/current-user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: CurrentUserService,
              private router: Router,
              private dialog: MatDialog) {
  }

  get hasAccess() {
    return this.userService.user;
  }

  get showLoginButton() {
    return !this.userService.user && !(this.router.url.startsWith('/login'));
  }
}
