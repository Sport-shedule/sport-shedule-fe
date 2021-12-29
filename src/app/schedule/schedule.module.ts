import { NgModule } from '@angular/core';
import { ScheduleRoutingModule } from './schedule-routing.module';
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
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { DataSourceService } from '../services/data-source.service';
import { CategoryEditorComponent } from './category-editor/category-editor.component';

@NgModule({
  declarations: [
    EventCardComponent,
    EventCardEditorComponent,
    CategoryEditorComponent
  ],
  imports: [
    ScheduleRoutingModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule
  ],
  exports: [
    EventCardComponent,
    EventCardEditorComponent,
    CategoryEditorComponent
  ],
  providers: [
    EventStorageService,
    DataSourceService
  ]
})
export class ScheduleModule {
}
