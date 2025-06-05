import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';

@Component({
  selector: 'app-about-me',
  imports: [FloatingArrowComponent],
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class AboutMeComponent {}