import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventStorageService } from '../services/event-storage.service';
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
    this.dataSource.addCategory(this.category).subscribe(_ => _);
    this.dialogRef.close();
  }

  cancel() {
    this.category = new Category();
  }
}
