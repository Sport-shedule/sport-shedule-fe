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

  getSportEventTypes(): Observable<Category[]> {
    return this.apiService.get<Category[]>(`/category/all`);
  }

  addEvent(sportEvent: Event): Observable<Event> {
    return this.apiService.post<Event>(`/admin/event`, sportEvent);
  }

  deleteEvent(id: number): Observable<Event> {
    return this.apiService.delete(`/admin/event/${ id }`);
  }

  addCategory(category: Category): Observable<Category> {
    return this.apiService.post(`/admin/category`, category);
  }
}



