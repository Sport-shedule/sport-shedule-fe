import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'schedule',
    canActivate: [AuthGuard],
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false , scrollPositionRestoration: 'enabled'},
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
