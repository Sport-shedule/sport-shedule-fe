import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { CurrentUserService } from './services/current-user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScheduleModule } from './schedule/schedule.module';
import { AuthenticationService } from './services/authentication.service';
import { OriginUrlService } from './services/origin-url.service';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    ScrollingModule,
    ScheduleModule,
    HttpClientModule
  ],
  providers: [
    CurrentUserService,
    AuthenticationService,
    OriginUrlService,
    ApiService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
