import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ae-inbuild-directives',
  templateUrl: './inbuild-directives.component.html',
  styleUrls: ['./inbuild-directives.component.css']
})
export class InbuildDirectivesComponent implements OnInit {
  public iShow = true;

  public currentNumber = 0;

  public countries = ['IN', 'US', 'UK', 'FR', 'GR'];

  constructor() {}

  ngOnInit() {}
}
