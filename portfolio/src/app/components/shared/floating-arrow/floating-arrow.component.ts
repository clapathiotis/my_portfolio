import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-floating-arrow',
  standalone: true,
  templateUrl: './floating-arrow.component.html',
  styleUrls: ['./floating-arrow.component.scss']
})
export class FloatingArrowComponent {
  @Input() targetSection: string = ''; // The ID of the section to scroll to

  scrollToSection(): void {
    const element = document.querySelector(this.targetSection);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}