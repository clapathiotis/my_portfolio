import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class AboutMeComponent {}