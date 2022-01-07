import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';
import { Event } from '../../models/event';
import { Category } from '../../models/category';
import { DataSourceService } from '../../services/data-source.service';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent {
  category = new Category();

  constructor(private dialogRef: MatDialogRef<CategoryEditorComponent>,
              private dataSource: DataSourceService,
              private storage: EventStorageService) {
  }

  save() {
    //this.storage.categories.push(this.category);
    this.dataSource.addCategory(this.category);
    this.dialogRef.close();
  }

  cancel() {
    this.category = new Category();
  }
}
