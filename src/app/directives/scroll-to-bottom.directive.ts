// src/app/scroll-to-bottom.directive.ts
import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appScrollToBottom]'
})
export class ScrollToBottomDirective implements AfterViewChecked {

  constructor(private el: ElementRef) {}

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    try {
      const element = this.el.nativeElement;
      element.scrollTop = element.scrollHeight;
    } catch (err) {}
  }
}
