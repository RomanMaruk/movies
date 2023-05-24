import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hover]',
})
export class HoverDirective {
  @Input() ele!: HTMLDivElement;
  @HostListener('mouseover', ['$event'])
  mouseover(event: MouseEvent) {
    const height = this.ele.scrollHeight;
    this.ele.style.height = height + 'px';
  }
  @HostListener('mouseleave', ['$event'])
  mouseleave(event: MouseEvent) {
    this.ele.style.height = '27px';
  }
}
