import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageBoxButtons } from './message-box-buttons';
import { MessageBoxResult } from './message-box-result';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  Mode = MessageBoxButtons;
  Result = MessageBoxResult;
  buttons: MessageBoxButtons = MessageBoxButtons.Ok;
  title = '';
  message = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private dialogData: any) {
  }

  ngOnInit(): void {
    this.buttons = this.dialogData.buttons;
    this.message = this.dialogData.message;
    this.title = this.dialogData.title;
  }
}
