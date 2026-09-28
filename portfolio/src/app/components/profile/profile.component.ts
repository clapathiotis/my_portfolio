import { Component } from '@angular/core';
import { slideInRightAnimation, slideInLeftAnimation, slideInUpAnimation, fadeInSocialsAnimation } from '../shared/animations/animations';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [slideInLeftAnimation, slideInRightAnimation, slideInUpAnimation, fadeInSocialsAnimation]
})
export class ProfileComponent {}