import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-10px)',
        maxHeight: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)',
        display: 'block'
      })),
      transition('closed => open', [
        style({ display: 'block' }), // Ensure the element is displayed before animating
        animate('300ms ease-in-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in-out', style({ opacity: 0, transform: 'translateY(-10px)' })),
        style({ display: 'none' }) // Hide the element after the animation
      ])
    ])
  ]
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}