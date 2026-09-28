import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive';
import { fadeInUpAnimation } from '../shared/animations/animations'; // Import the animation

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective], // Add CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeInUpAnimation] // Use the fadeInUpAnimation
})
export class ProjectsComponent {
  isVisible = false; // Track visibility state
  
  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }

  projects = [
    {
      id: 0,
      icon: 'fas fa-receipt',
      title: 'Billio',
      subtitle: 'Household expense tracker with AI bill scanning (Gemini via a Supabase Edge Function), used to share expenses at home.',
      tags: ['Supabase', 'Gemini API', 'Edge Functions'],
      link: 'https://github.com/clapathiotis/billio'
    },
    {
      id: 1,
      icon: 'fas fa-ship',
      title: 'Container Tracker',
      subtitle: 'Live container shipment tracking with route map, search by container number or Bill of Lading, and an admin panel that generates tracking emails.',
      tags: ['React', 'Supabase', 'Leaflet'],
      link: 'https://github.com/clapathiotis/container-tracker'
    },
    {
      id: 2,
      icon: 'fas fa-vial',
      title: 'ConSEPt: BSc Graduation Project',
      subtitle: 'Automatic test generator and execution tool for source files, built for Philips.',
      tags: ['Python', 'Test automation'],
      link: 'https://github.com/clapathiotis/ConSEPt'
    },
    {
      id: 3,
      icon: 'fas fa-book-open',
      title: 'Library Management System',
      subtitle: 'University library management system built with Angular and Spring Boot.',
      tags: ['Angular', 'Spring Boot', 'Java'],
      link: 'https://github.com/clapathiotis/LibraryManagement'
    },
    {
      id: 4,
      icon: 'fas fa-bed',
      title: 'SleepSmarter',
      subtitle: 'App for improving the sleep quality of the elderly, built for a TU/e course.',
      tags: ['Java', 'Android'],
      link: 'https://github.com/clapathiotis/SleepSmarter'
    },
    {
      id: 5,
      icon: 'fab fa-angular',
      title: 'This Portfolio',
      subtitle: 'The site you are viewing, built with Angular and deployed on GitHub Pages.',
      tags: ['Angular', 'SCSS'],
      link: 'https://github.com/clapathiotis/my_portfolio'
    }
  ];

  openGitHub(link: string): void {
    window.open(link, '_blank');
  }
}