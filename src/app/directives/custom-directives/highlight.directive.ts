import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[aeHighlight]'
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
  }
}
