import { Component, Input, OnInit } from '@angular/core';
import { EventStorageService } from '../services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from '../event-card-editor/event-card-editor.component';
import { Event } from '../../models/event';
import { DataSourceService } from '../../services/data-source.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() sportEvent: Event;

  constructor(private storage: EventStorageService,
              private dialog: MatDialog,
              private dataSource: DataSourceService) {
  }

  ngOnInit(): void {
  }

  delete() {
    /*this.dataSource.deleteEvent(this.sportEvent.id).subscribe(_ => {
      const category = this.storage.categories.find(_ => _.id == this.sportEvent.categoryId);
      const index = category.events.indexOf(this.sportEvent);
      category.events.splice(index, 1);
    })*/
    const category = this.storage.categories.find(_ => _.id == this.sportEvent.categoryId);
    const index = category.events.indexOf(this.sportEvent);
    category.events.splice(index, 1);
  }

  edit() {
    const a = this.dialog.open(EventCardEditorComponent, {
      data: {
        sportEvent: this.sportEvent
      }
    });
  }
}
