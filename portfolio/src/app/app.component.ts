import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { TechstackComponent } from './components/techstack/techstack.component';
import { ProjectsComponent } from './components/projects/projects.component';

import { Router, NavigationEnd } from '@angular/router';

// Declare gtag globally
declare function gtag(...args: any[]): void;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent, 
    ProfileComponent, FooterComponent, 
    AboutMeComponent, TechstackComponent, 
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to track page views
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Google Analytics tracking code
        gtag('config', 'G-3MTTDL7FNC', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}