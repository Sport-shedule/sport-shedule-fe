import { Component, OnInit } from '@angular/core';

export class SportEvent {
  type: string;
  name: string;
  firstScore: number;
  secondScore: number;
  firstParticipant: string;
  secondParticipant: string;
  banner: string;

  constructor(s: string, s1: string, number: number, number1: number, s2: string, s3: string) {
    this.type = s;
    this.name = s1;
    this.firstParticipant = s2;
    this.secondParticipant = s2;
    this.firstScore = number;
    this.secondScore = number1;
  }
}

const CARD_OUTER_WIDTH = 314;
const CARD_CONTAINER_WIDTH = 0.8;

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  events: SportEvent[];
  footballEvents: any[];
  hockeyEvents: any[];
  basketEvents: any[];
  tennisEvents: any[];

  constructor() {
    this.events = [
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('basketball', 'basketball', 5, 55, 'пывапав12', 'ацуацуа23'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('tennis', 'tennis', 66, 12, 'ждьщтьщльбдж', 'ацфптнклеглкнеоен'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл'),
      new SportEvent('hockey', 'hockey', 43, 77, 'йцуцукце', 'роегнлнгл')
    ];
  }

  ngOnInit(): void {
    this.footballEvents = this.events.filter(_ => _.type == 'football');
    this.basketEvents = this.events.filter(_ => _.type == 'basketball');
    this.tennisEvents = this.events.filter(_ => _.type == 'tennis');
    this.hockeyEvents = this.events.filter(_ => _.type == 'hockey');
  }

}
