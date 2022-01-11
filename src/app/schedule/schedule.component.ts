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
    this.dataSource.getSportEventTypes().subscribe(_ => {
      this.storage.categories = _;
    });
  }

  getEvents(category: Category) {
    return category.events;
  }

  addEvent() {
    const dialog = this.dialog.open(EventCardEditorComponent, {
      data: {
        sportEvent: new Event(),
        isAdding: true
      }
    });
    dialog.afterClosed().subscribe(_ => {
      this.dataSource.getSportEventTypes().subscribe(_ => {
        this.storage.categories = _;
      });
    });
  }

  addCategory() {
    const dialog = this.dialog.open(CategoryEditorComponent);
    dialog.afterClosed().subscribe(_ => {
      this.dataSource.getSportEventTypes().subscribe(_ => {
        this.storage.categories = _;
      });
    });
  }
}
