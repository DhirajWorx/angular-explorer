import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[aeRenderer2Highlight]'
})
export class Renderer2HighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }
}
