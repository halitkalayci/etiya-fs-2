import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
//Behavioral Directive
export class HighlightDirective {
  @Input() appHighlight: string = 'yellow';
  @Input() permanent!: boolean;

  constructor(private element: ElementRef) {}

  @HostListener('mouseenter')
  addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('mouseleave')
  removeHighlight() {
    if (!this.permanent) this.element.nativeElement.style.backgroundColor = '';
  }
}
