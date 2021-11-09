import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ScheduleRoutingModule {
}
