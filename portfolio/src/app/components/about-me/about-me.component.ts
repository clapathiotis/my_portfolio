import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive';
import { fadeInUpAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-about-me',
  imports: [IntersectionObserverDirective],
  animations: [fadeInUpAnimation],
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  isVisible = false; // Track visibility state

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }
}