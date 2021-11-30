import { Component, Input, OnInit } from '@angular/core';
import { SportEvent } from '../schedule.component';
import { EventStorageService } from '../services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from '../event-card-editor/event-card-editor.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event: SportEvent;

  constructor(private storage: EventStorageService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  delete() {
    const index = this.storage.events.indexOf(this.event);
    this.storage.events.splice(index, 1);
    this.storage.refresh();
  }

  edit() {
    const a = this.dialog.open(EventCardEditorComponent, {
      data: {
        event: this.event
      }
    })
    a.afterClosed().subscribe(_ => {
      this.event = a.componentInstance.event;
    })
  }
}
