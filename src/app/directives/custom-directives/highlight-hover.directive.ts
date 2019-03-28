import { Directive, ElementRef, OnInit } from '@angular/core';
import { hostViewClassName } from '@angular/compiler';

@Directive({
  selector: '[aeHighlightHover]'
})
export class HighlightHoverDirective implements OnInit {
  private host: HTMLElement;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.host = this.elementRef.nativeElement;
    this.host.addEventListener('mouseover', () => {
      this.host.style.backgroundColor = 'pink';
    });
    this.host.addEventListener('mouseout', () => {
      this.host.style.backgroundColor = 'transparent';
    });
  }
}
