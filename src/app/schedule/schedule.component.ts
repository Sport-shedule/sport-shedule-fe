import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventStorageService } from './services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from './event-card-editor/event-card-editor.component';
import { Event } from '../models/event';
import { Category } from '../models/category';
import { DataSourceService } from '../services/data-source.service';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { titleCaseWord } from '../functions/titleCaseWord';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  categories: Category[] = [];
  private unsubscribeSubject = new Subject<void>();

  constructor(public storage: EventStorageService,
              private dataSource: DataSourceService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource.getSportEventTypes()
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(_ => {
        this.storage.categories = _;
      });
  }

  getEvents(category: Category) {
    return category.events.sort(this.compareByDate);
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
    this.dialog.open(CategoryEditorComponent);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  private compareByDate(a: Event, b: Event) {
    if (a.date > b.date) {
      return 1;
    }
    if (a.date < b.date) {
      return -1;
    }
    return 0;
  }

  titleCaseWord(name: string) {
    return titleCaseWord(name);
  }
}

