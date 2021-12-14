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
      new SportEvent('football', 'football1 grn wegn wlrng wrlneg lrewlgn ewr;g nrewg nwrel jnewrlg nkj', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football2', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football3g', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football4', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football5', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football6', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football7', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football8', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('football', 'football9', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('basketball', 'basketball', '2021-12-08T12:12:12', 'йцуйцуйцу', 3, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('tennis', 'tennis', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4),
      new SportEvent('hockey', 'hockey', '2021-12-08T12:12:12', 'йцуйцуйцу', 13, 'пупукпук', 4)
    ];
  }

  refresh() {
    this.footballEvents = this.events.filter(_ => _.type.toLowerCase() == 'football');
    this.basketEvents = this.events.filter(_ => _.type.toLowerCase() == 'basketball');
    this.tennisEvents = this.events.filter(_ => _.type.toLowerCase() == 'tennis');
    this.hockeyEvents = this.events.filter(_ => _.type.toLowerCase() == 'hockey');
  }
}
