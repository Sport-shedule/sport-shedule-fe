import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { EventStorageService } from '../services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from '../event-card-editor/event-card-editor.component';
import { Event } from '../../models/event';
import { DataSourceService } from '../../services/data-source.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnDestroy {
  @Input() sportEvent: Event;
  private unsubscribeSubject = new Subject<void>();

  constructor(private storage: EventStorageService,
              private dialog: MatDialog,
              private dataSource: DataSourceService) {
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  delete() {
    this.dataSource.deleteEvent(this.sportEvent.id)
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(_ => {
        this.dataSource.getSportEventTypes()
          .pipe(takeUntil(this.unsubscribeSubject))
          .subscribe(_ => {
            this.storage.categories = _;
          });
      });
  }

  edit() {
    const dialog = this.dialog.open(EventCardEditorComponent, {
      data: {
        sportEvent: this.sportEvent
      }
    });
  }
}
