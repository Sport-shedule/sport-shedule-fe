import { Component, Input, OnInit } from '@angular/core';
import { SportEvent } from '../schedule.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() event: SportEvent;

  constructor() {
  }

  ngOnInit(): void {
  }

}
