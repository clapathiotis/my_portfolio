import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      id: 0,
      src: 'assets/images/angular.png',
      title: 'Portfolio Website',
      subtitle: 'The website you are currently viewing, built with Angular.',
      link: 'https://github.com/clapathiotis/my_portfolio'
    },
    {
      id: 1,
      src: 'assets/images/philips.png',
      title: 'ConSEPt: BSc Graduation Project',
      subtitle: 'Source file automatic test generator and execution tool, built for Philips.',
      link: 'https://github.com/clapathiotis/consept'
    },
    {
      id: 2,
      src: 'assets/images/SleepSmarter.png',
      title: 'SleepSmarter',
      subtitle: 'Healthcare app for sleep apnea patients and related health conditions, built with Java.',
      link: 'https://github.com/clapathiotis/SleepSmarter'
    },
    {
      id: 3,
      src: 'assets/images/library.jpg',
      title: 'Library Management System',
      subtitle: 'Library management system for a university, built with Angular and Spring Boot.',
      link: 'https://github.com/clapathiotis/LibraryManagement'
    }
  ];

  openGitHub(link: string): void {
    window.open(link, '_blank');
  }
}