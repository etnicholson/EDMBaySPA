import { Component, OnInit } from '@angular/core';
import { DataRetriverService } from '../_services/data-retriver.service';
import { EventsDto } from '../_models/events-dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  events: EventsDto[];
  previous: Date;
  featureDate: Date;

  events$: Observable<EventsDto[]>;

  constructor(private data: DataRetriverService) { }

  ngOnInit() {
    this.featureDate = new Date();
    this.featureDate.setDate(this.featureDate.getDate() - 5);
    console.log(this.featureDate);
    this.events$ = this.data.getEvents();

  }

}
