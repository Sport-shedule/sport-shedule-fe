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
import { UserService } from './services/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScheduleModule } from './schedule/schedule.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduleComponent
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
    ScheduleModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
