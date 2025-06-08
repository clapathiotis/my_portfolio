import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit } from '@angular/core';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive';
import { fadeInUpAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-about-me',
  imports: [FloatingArrowComponent, IntersectionObserverDirective],
  animations: [fadeInUpAnimation],
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class AboutMeComponent {
  isVisible = false; // Track visibility state

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }
}