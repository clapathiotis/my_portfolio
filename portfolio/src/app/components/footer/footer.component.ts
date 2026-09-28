import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive';
import { fadeInUpAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-footer',
  imports: [IntersectionObserverDirective],
  animations: [fadeInUpAnimation],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  isVisible = false;

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }
}