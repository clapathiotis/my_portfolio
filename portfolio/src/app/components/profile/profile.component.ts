import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, state } from '@angular/animations';
import { FloatingArrowComponent } from '../shared/floating-arrow/floating-arrow.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FloatingArrowComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        animate(
          '2s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ])
        )
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        animate(
          '2s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ])
        )
      ])
    ]),
    trigger('slideInUp', [
      transition(':enter', [
        animate(
          '2s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ]),
    trigger('fadeInSocials', [
      transition(':enter', [
        animate(
          '5s ease-out',
          keyframes([
            style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class ProfileComponent {}