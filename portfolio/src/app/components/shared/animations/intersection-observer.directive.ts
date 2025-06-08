import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
  @Output() isVisible = new EventEmitter<boolean>(); // Emit visibility changes as boolean

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible.emit(true); // Emit true when the element is visible
          observer.unobserve(this.el.nativeElement); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 20% of the element is visible
    );

    observer.observe(this.el.nativeElement);
  }
}