import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';
import { Event } from '../../models/event';
import { Category } from '../../models/category';
import { DataSourceService } from '../../services/data-source.service';

function jsonCopy(src: any) {
  return JSON.parse(JSON.stringify(src));
}

@Component({
  selector: 'app-event-card-editor',
  templateUrl: './event-card-editor.component.html',
  styleUrls: ['./event-card-editor.component.css']
})
export class EventCardEditorComponent implements OnInit {
  sportEvent: Event;
  isAdding: boolean;
  categories: Category[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any,
              private dialogRef: MatDialogRef<EventCardEditorComponent>,
              private storage: EventStorageService,
              private dataSource: DataSourceService) {
    this.isAdding = dialogData.isAdding;
    this.sportEvent = jsonCopy(dialogData.sportEvent);
    this.categories = storage.categories;
  }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    const reader = new FileReader();
    const ref = this;
    reader.onload = () => {
      const base64 = btoa(reader.result as string);
      this.onChange(base64);
      ref.sportEvent.images[0] = base64;
    };
    const inputFile = e.target.files[0];

    reader.readAsBinaryString(inputFile);
  }

  onChange = (value: any) => {
  };

  save() {
    if (this.isAdding) {
      this.dataSource.addEvent(this.sportEvent).subscribe(_ => _);
      this.dialogRef.close();
      return;
    }
    this.dataSource.editEvent(this.sportEvent).subscribe(_ => _);
    this.dialogRef.close();
  }

  cancel() {
    this.sportEvent = jsonCopy(this.dialogData.sportEvent);
  }

  inc() {
    this.sportEvent.score.scorePlayer1++;
  }

  dec() {
    this.sportEvent.score.scorePlayer1--;
  }

  inc2() {
    this.sportEvent.score.scorePlayer2++;
  }

  dec2() {
    this.sportEvent.score.scorePlayer2--;
  }
}
