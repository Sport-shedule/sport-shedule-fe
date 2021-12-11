import { Component, OnInit } from '@angular/core';
import { EventStorageService } from './services/event-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { EventCardEditorComponent } from './event-card-editor/event-card-editor.component';

export class SportEvent {
  id: number;
  type: string;
  name: string;
  date: string;
  firstScore: number;
  secondScore: number;
  firstParticipant: string;
  secondParticipant: string;
  banner: string;

  constructor(type: string = '', name: string = '', date: string = '', firstParticipant: string = '', firstScore: number = 0,
              secondParticipant: string = '', secondScore: number = 0, banner: string = '') {
    this.type = type;
    this.name = name;
    this.date = date;
    this.firstParticipant = firstParticipant;
    this.firstScore = firstScore;
    this.secondParticipant = secondParticipant;
    this.secondScore = secondScore;
  }

  update(event: SportEvent) {
    this.type = event.type;
    this.name = event.name;
    this.date = event.date;
    this.firstParticipant = event.firstParticipant;
    this.firstScore = event.firstScore;
    this.secondParticipant = event.secondParticipant;
    this.secondScore = event.secondScore;
    this.banner = event.banner;
  }
}

export class DataSourceService {
  getSportEventTypes() {
    return ['Football', 'Basketball', 'Hockey', 'Tennis'];
  }
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  types: string[] = [];

  constructor(public storage: EventStorageService,
              private dataSource: DataSourceService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.types = this.dataSource.getSportEventTypes();
    this.storage.refresh();
  }

  getEvents(type: string) {
    return this.storage.events.filter(_ => _.type.toLowerCase() === type.toLowerCase());
  }

  /*private targetsToTile(targets: SportEvent[]) {
    const rowSize = Math.floor(window.innerWidth * CARD_CONTAINER_WIDTH / CARD_OUTER_WIDTH);

    const tileTargets = [];
    for (let i = 0; i < Math.ceil(targets.length / rowSize); i++) {
      tileTargets[i] = targets.slice((i * rowSize), (i * rowSize) + rowSize);
    }

    return tileTargets;
  }*/

  add() {
    this.dialog.open(EventCardEditorComponent, {
      data: {
        sportEvent: new SportEvent(),
        isAdding: true
      }
    });
  }
}
