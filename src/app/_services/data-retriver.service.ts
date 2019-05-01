import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { EventsDto } from '../_models/events-dto';

@Injectable({
  providedIn: 'root'
})
export class DataRetriverService {


baseUrl = environment.apiUrl + 'events/';
constructor(private http: HttpClient) {


 }

 getEvents() {
  return this.http.get<EventsDto[]>(this.baseUrl).pipe(
    map(res =>  res));

 }

}
