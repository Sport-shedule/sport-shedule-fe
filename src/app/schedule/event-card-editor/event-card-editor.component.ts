import { Component, Inject, OnInit } from '@angular/core';
import { SportEvent } from '../schedule.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
              private dialogRef: MatDialogRef<EventCardEditorComponent>) {
    this.event = jsonCopy(dialogData.event)
  }


  ngOnInit(): void {
  }

  selectImage() {

  }

  save() {
    this.dialogData.event = this.event;
    this.dialogRef.close();
  }

  cancel() {
    this.event = jsonCopy(this.dialogData.event);
  }
}
