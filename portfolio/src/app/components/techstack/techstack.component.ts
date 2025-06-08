import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';
import { fadeInUpAnimation } from '../shared/animations/animations'
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive'; // Import the directive

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule, FloatingArrowComponent, IntersectionObserverDirective], // Import CommonModule to use NgFor and other directives
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
  animations: [fadeInUpAnimation]
})
export class TechstackComponent {
  isVisible = false; // Track visibility state

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }

  technologies = [
    { name: 'Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Test Automation', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
    { name: 'Robot Framework', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/robotframework/robotframework-original.svg' }
  ];
}