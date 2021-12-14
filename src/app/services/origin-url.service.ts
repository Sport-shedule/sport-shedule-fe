import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class OriginUrlService {
  private location: Observable<string>;

  constructor(private http: HttpClient) {
  }

  public get originUrl(): Observable<string> {
    if (this.location === undefined) {
      this.location = this.http
        .get('../settings/protocol.json')
        .pipe(
          map(config => this.mapConfig(config)),
          shareReplay(1)
        );
    }
    return this.location;
  }

  private mapConfig(config: Object): string {
    const protocol = location.protocol.substring(0, location.protocol.length - 1);
    const port = Object.keys(config).filter(_ => _ === protocol)[0];

    const currentPort = location.port;
    return currentPort !== '' ? location.origin.replace(location.port, port) : location.origin + ':' + port;
  }
}
