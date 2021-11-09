import { NgModule } from '@angular/core';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { EventCardComponent } from './event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

    EventCardComponent
  ],
    imports: [
        ScheduleRoutingModule,
        TableVirtualScrollModule,
        MatCardModule,
        CommonModule
    ],
  exports: [
    EventCardComponent
  ],
  providers: []
})
export class ScheduleModule { }
