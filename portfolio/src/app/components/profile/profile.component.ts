import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';
import { slideInRightAnimation, slideInLeftAnimation, slideInUpAnimation, fadeInSocialsAnimation } from '../shared/animations/animations';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FloatingArrowComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, fadeInSocialsAnimation]
})
export class ProfileComponent {}