import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
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
