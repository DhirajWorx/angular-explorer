import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[aeHostBasedHighlight]'
})
export class HostBasedHighlightDirective implements OnInit {
  @Input('aeHostBasedHighlight') inputColor: string;
  @HostBinding('style.backgroundColor') bgColor;
  constructor() {}

  ngOnInit(): void {
    this.inputColor = 'pink';
    console.log('Init::' + this.inputColor);
  }

  @HostListener('mouseenter') mouseEnter(event) {
    console.log('inputColor::' + this.inputColor);
    this.bgColor = this.inputColor;
  }
  @HostListener('mouseleave') mouseLeave(event) {
    this.bgColor = 'transparent';
  }
}
