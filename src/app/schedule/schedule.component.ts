import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { EventStorageService } from './services/event-storage.service';

export class SportEvent {
  id: number;
  type: string;
  name: string;
  firstScore: number;
  secondScore: number;
  firstParticipant: string;
  secondParticipant: string;
  banner: string;

  constructor(type: string, name: string, firstScore: number, secondScore: number, firstParticipant: string, secondParticipant: string,
              banner: string = '') {
    this.type = type;
    this.name = name;
    this.firstParticipant = firstParticipant;
    this.secondParticipant = secondParticipant;
    this.firstScore = firstScore;
    this.secondScore = secondScore;
  }

  update(event: SportEvent) {
    this.type = event.type;
    this.name = event.name;
    this.firstParticipant = event.firstParticipant;
    this.secondParticipant = event.secondParticipant;
    this.firstScore = event.firstScore;
    this.secondScore = event.secondScore;
    this.banner = event.banner;
  }
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(public storage: EventStorageService) {
  }

  ngOnInit(): void {
    this.storage.refresh();
  }

  /*private targetsToTile(targets: SportEvent[]) {
    const rowSize = Math.floor(window.innerWidth * CARD_CONTAINER_WIDTH / CARD_OUTER_WIDTH);

    const tileTargets = [];
    for (let i = 0; i < Math.ceil(targets.length / rowSize); i++) {
      tileTargets[i] = targets.slice((i * rowSize), (i * rowSize) + rowSize);
    }

    return tileTargets;
  }*/

}
