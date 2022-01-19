import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';
import { Event } from '../../models/event';
import { Category } from '../../models/category';
import { DataSourceService } from '../../services/data-source.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { jsonCopy } from '../../functions/json.copy';
import { titleCaseWord } from '../../functions/titleCaseWord';

@Component({
  selector: 'app-event-card-editor',
  templateUrl: './event-card-editor.component.html',
  styleUrls: ['./event-card-editor.component.css']
})
export class EventCardEditorComponent implements OnDestroy {
  sportEvent: Event;
  isAdding: boolean;
  categories: Category[] = [];
  private unsubscribeSubject = new Subject<void>();

  constructor(@Inject(MAT_DIALOG_DATA) private dialogData: any,
              private dialogRef: MatDialogRef<EventCardEditorComponent>,
              private storage: EventStorageService,
              private dataSource: DataSourceService) {
    this.isAdding = dialogData.isAdding;
    this.sportEvent = jsonCopy(dialogData.sportEvent);
    this.categories = storage.categories;
  }

  titleCaseWord(name: string) {
    return titleCaseWord(name);
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
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
    this.dataSource.addEvent(this.sportEvent)
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(_ => {
        this.dataSource.getSportEventTypes()
          .pipe(takeUntil(this.unsubscribeSubject))
          .subscribe(_ => {
              this.storage.categories = _;
            },
            error => {
              console.log(error);
            },
            () => this.dialogRef.close());
      });
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
