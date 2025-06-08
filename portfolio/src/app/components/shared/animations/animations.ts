import { trigger, transition, style, animate, state } from '@angular/animations';

export const fadeInUpAnimation = trigger('fadeInUp', [
  state('false', style({ opacity: 0, transform: 'translateY(40px)' })), // Initial state
  state('true', style({ opacity: 1, transform: 'translateY(0)' })), // Final state
  transition('false => true', animate('1500ms ease-out')), // Animation when transitioning to visible
]);