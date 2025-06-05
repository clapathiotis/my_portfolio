import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule, FloatingArrowComponent], // Import CommonModule to use NgFor and other directives
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss']
})
export class TechstackComponent {
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