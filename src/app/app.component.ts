import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService,
              private router: Router,
              private dialog: MatDialog) {
  }

  get showLoginButton() {
    return !this.userService.user && !(this.router.url.startsWith('/login'));
  }

  login() {
    this.dialog.open(LoginComponent)
  }
}
