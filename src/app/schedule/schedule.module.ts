import { NgModule } from '@angular/core';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { EventCardComponent } from './event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { EventStorageService } from './services/event-storage.service';
import { EventCardEditorComponent } from './event-card-editor/event-card-editor.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EventCardComponent,
    EventCardEditorComponent
  ],
  imports: [
    ScheduleRoutingModule,
    TableVirtualScrollModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    EventCardComponent,
    EventCardEditorComponent
  ],
  providers: [EventStorageService]
})
export class ScheduleModule {
}
