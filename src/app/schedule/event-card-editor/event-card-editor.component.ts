import { Component, Inject, OnInit } from '@angular/core';
import { SportEvent } from '../schedule.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';

function jsonCopy(src: any) {
  return JSON.parse(JSON.stringify(src));
}

@Component({
  selector: 'app-event-card-editor',
  templateUrl: './event-card-editor.component.html',
  styleUrls: ['./event-card-editor.component.css']
})
export class EventCardEditorComponent implements OnInit {
  event: SportEvent;

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any,
              private dialogRef: MatDialogRef<EventCardEditorComponent>,
              private storage: EventStorageService) {
    this.event = jsonCopy(dialogData.event);
  }

  ngOnInit(): void {
  }

  selectImage(e: any) {
    const reader = new FileReader();
    const ref = this;
    reader.onload = () => {
      const base64 = btoa(reader.result as string);
      this.onChange(base64);
      ref.event.banner = base64;
    };
    const inputFile = e.target.files[0];

    reader.readAsBinaryString(inputFile);
  }

  onChange = (value: any) => {
  };

  save() {
    const b = this.storage.events.find(_ => _ == this.dialogData.event);
    b?.update(this.event);
    this.dialogRef.close();
  }

  cancel() {
    this.event = jsonCopy(this.dialogData.event);
  }
}
