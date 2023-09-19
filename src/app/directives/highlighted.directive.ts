import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  exportAs: 'hl'
})
export class HighlightedDirective {

  @Input('highlighted') isHighlighted: boolean = false;
  @Output() toggleHighlight = new EventEmitter<boolean>();

  constructor() { 
    console.log('Highlighted directive created');
  }

  // @HostBinding('className') get cssClasses() {
  //   return 'highlighted';
  // }

  @HostBinding('class.highlighted') get cssClasses() {
    return this.isHighlighted;
  }

  // @HostBinding('style.border') get border() {
  //   return '1px solid red';
  // }

  // @HostBinding('attr.disabled') get disabled() {
  //   return true;
  // }

  @HostListener('mouseenter') onMouseEnter() {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

}
