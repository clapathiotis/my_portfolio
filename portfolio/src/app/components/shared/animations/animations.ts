import { trigger, transition, style, animate, state, keyframes} from '@angular/animations';

export const fadeInUpAnimation = trigger('fadeInUp', [
  state('false', style({ opacity: 0, transform: 'translateY(40px)' })), // Initial state
  state('true', style({ opacity: 1, transform: 'translateY(0)' })), // Final state
  transition('false => true', animate('1500ms ease-out')), // Animation when transitioning to visible
]);

export const slideInRightAnimation = trigger('slideInRight', [
  transition(':enter', [
    animate(
      '2s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateX(100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ])
    )
  ])
]);

export const slideInLeftAnimation = trigger('slideInLeft', [
  transition(':enter', [
    animate(
      '2s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateX(-100px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
      ])
    )
  ])
]);

export const slideInUpAnimation = trigger('slideInUp', [
  transition(':enter', [
    animate(
      '2s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(50px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])
    )
  ])
]);

export const fadeInSocialsAnimation = trigger('fadeInSocials', [
  transition(':enter', [
    animate(
      '5s ease-out',
      keyframes([
        style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ])
    )
  ])
]);