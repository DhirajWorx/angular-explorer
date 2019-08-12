import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ae-pipe-home',
  templateUrl: './pipe-home.component.html',
  styleUrls: ['./pipe-home.component.css']
})
export class PipeHomeComponent implements OnInit {
  testVar = 'Ramesh';
  persons = [
    'Divit Panchal',
    'Amit Gupta',
    'Harsha Dave',
    'Dhiraj Panchal',
    'Bhumika Dave'
  ];

  constructor() {}
  ngOnInit() {
    this.testVar = 'Dhiraj';
    setTimeout(() => {
      this.testVar = 'Divit';
      this.persons.push('Sunil Pradhan');
      this.persons.push('Shikha Panchal');
    }, 5000);
  }
}
