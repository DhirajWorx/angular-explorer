import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() appNotify: EventEmitter<string> = new EventEmitter();

  constructor() {}
}
