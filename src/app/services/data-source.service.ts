import { Injectable } from '@angular/core';
import { EventStorageService } from '../schedule/services/event-storage.service';
import { ApiService } from './api.service';
import { Category } from '../models/category';
import { Event } from '../models/event';
import { Observable } from 'rxjs';

@Injectable()
export class DataSourceService {
  constructor(public storage: EventStorageService, private apiService: ApiService) {
  }

  getSportEventTypes(): Category[] {
    let result = [];
    this.apiService.get<Category[]>(`admin/category/all`).subscribe(_ => result = _);
    return result;
    /*return this.storage.categories;*/
  }

  addEvent(sportEvent: Event): Observable<Event> {
    return this.apiService.post<Event>(`admin/event`, sportEvent);
  }

  editEvent(sportEvent: Event): Observable<Event> {
    return this.apiService.put<Event>(`admin/editEvent`, sportEvent);
  }

  deleteEvent(id: number): Observable<Event> {
    return this.apiService.delete(`admin/event?id=${id}`);
  }

  addCategory(category: Category) {
    this.apiService.post(`admin/category`, category);
  }
}



