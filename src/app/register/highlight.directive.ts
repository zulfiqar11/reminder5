import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = '';
  @Output() highlighted = new EventEmitter<void>();

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.highlighted.emit();
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
