import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'ae-yellow-serv',
  templateUrl: './yellow-serv.component.html',
  styleUrls: ['./yellow-serv.component.css']
})
export class YellowServComponent implements OnInit {
  @Input() ID = 0;
  lastMsg = 'NA';
  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.appNotify.subscribe(msg => {
      this.lastMsg = msg;
    });
  }

  fireEvent() {
    this.eventService.appNotify.emit(`Evoked by # ${this.ID} : (${(new Date()).getSeconds()})`);
  }
}
