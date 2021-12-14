import { Component, Inject, OnInit } from '@angular/core';
import { SportEvent } from '../schedule.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';

@Component({
  selector: 'app-event-card-editor',
  templateUrl: './event-card-editor.component.html',
  styleUrls: ['./event-card-editor.component.css']
})
export class EventCardEditorComponent implements OnInit {
  sportEvent: SportEvent;
  keys: string[] = ['Football', 'Hockey', 'Basketball', 'Tennis'];
  isAdding: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any,
              private dialogRef: MatDialogRef<EventCardEditorComponent>,
              private storage: EventStorageService) {
    this.isAdding = dialogData.isAdding;
    this.sportEvent = Object.assign({}, dialogData?.sportEvent);
  }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    const reader = new FileReader();
    const ref = this;
    reader.onload = () => {
      const base64 = btoa(reader.result as string);
      this.onChange(base64);
      ref.sportEvent.banner = base64;
    };
    const inputFile = e.target.files[0];

    reader.readAsBinaryString(inputFile);
  }

  onChange = (value: any) => {
  };

  save() {
    if (this.isAdding) {
      this.storage.events.push(this.sportEvent);
      this.storage.refresh();
      this.dialogRef.close();
      return;
    }
    const b = this.storage.events.find(_ => _ == this.dialogData.sportEvent);
    b?.update(this.sportEvent);
    this.storage.refresh();
    this.dialogRef.close();
  }

  cancel() {
    this.sportEvent = Object.assign({}, this.dialogData.sportEvent);
  }

  inc() {
    this.sportEvent.firstScore++;
  }

  dec() {
    this.sportEvent.firstScore--;
  }

  inc2() {
    this.sportEvent.secondScore++;
  }

  dec2() {
    this.sportEvent.secondScore--;
  }
}
