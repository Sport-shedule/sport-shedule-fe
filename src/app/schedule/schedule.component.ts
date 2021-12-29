import { Component, OnInit } from '@angular/core';
import { EventStorageService } from './services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from './event-card-editor/event-card-editor.component';
import { Event } from '../models/event';
import { Category } from '../models/category';
import { DataSourceService } from '../services/data-source.service';
import { CategoryEditorComponent } from './category-editor/category-editor.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  categories: Category[] = [];

  constructor(public storage: EventStorageService,
              private dataSource: DataSourceService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.categories = this.dataSource.getSportEventTypes();
  }

  getEvents(type: Category) {
    return type.events;
  }

  addEvent() {
    this.dialog.open(EventCardEditorComponent, {
      data: {
        sportEvent: new Event(),
        isAdding: true
      }
    });
  }

  addCategory() {
    const dialog = this.dialog.open(CategoryEditorComponent)
    dialog.afterClosed().subscribe(_ => {
      this.dataSource.getSportEventTypes();
    })
  }
}
