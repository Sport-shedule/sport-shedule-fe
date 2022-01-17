import { Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';
import { Category } from '../../models/category';
import { DataSourceService } from '../../services/data-source.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnDestroy {
  category = new Category();
  private unsubscribeSubject = new Subject<void>();

  constructor(private dialogRef: MatDialogRef<CategoryEditorComponent>,
              private dataSource: DataSourceService,
              private storage: EventStorageService) {
  }

  save() {
    this.dataSource.addCategory(this.category)
      .pipe(takeUntil(this.unsubscribeSubject))
      .subscribe(_ => _);
    this.dialogRef.close();
  }

  cancel() {
    this.category = new Category();
  }

  ngOnDestroy(): void {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }
}
