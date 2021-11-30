import { SportEvent } from '../schedule.component';
import { OnInit } from '@angular/core';

export class EventStorageService {
  events: SportEvent[];
  footballEvents: any[];
  hockeyEvents: any[];
  basketEvents: any[];
  tennisEvents: any[];

  constructor() {
    this.events = [
      new SportEvent('football', 'football1 grn wegn wlrng wrlneg lrewlgn ewr;g nrewg nwrel jnewrlg nkj', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football2', 1231, 234, 'bher bergb lerkjgb wjg ', 'mvglekr ngklwrneg lknwre'),
      new SportEvent('football', 'football3g', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football4', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football5', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football6', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football7', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football8', 3, 4, 'йцуйцуйцу', 'пупукпук'),
      new SportEvent('football', 'football9', 3, 4, 'йцуйцуйцу', 'пупукпук'),
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

  refresh() {
    this.footballEvents = this.events.filter(_ => _.type == 'football');
    this.basketEvents = this.events.filter(_ => _.type == 'basketball');
    this.tennisEvents = this.events.filter(_ => _.type == 'tennis');
    this.hockeyEvents = this.events.filter(_ => _.type == 'hockey');
  }
}
