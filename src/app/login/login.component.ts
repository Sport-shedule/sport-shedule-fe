import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUserService } from '../services/current-user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  error: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private currentUserService: CurrentUserService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.error = this.currentUserService.authenticationMessage;
  }

  login() {
    this.loading = true;

    this.authenticationService
      .login(this.model.username, this.model.password)
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        _ => {
          this.error = _.error;
          this.loading = false;
        },
        () => this.loading = false);
  }
}
