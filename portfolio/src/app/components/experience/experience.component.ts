import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive';
import { fadeInUpAnimation } from '../shared/animations/animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [fadeInUpAnimation]
})
export class ExperienceComponent {
  isVisible = false;

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible;
  }

  jobs = [
    {
      role: 'Associate Data Engineer',
      company: 'XM',
      period: 'Oct 2025 - Present',
      location: 'Nicosia, Cyprus · Hybrid',
      points: [
        'Designed and implemented a custom GitLab–AWS CI/CD pipeline tailored to internal data workflows.',
        'Built event-driven pipelines with AWS Step Functions and Glue, cutting Financial Control processing time by 99%.',
        'Working on AML-related developments using REST APIs.'
      ],
      tags: ['AWS Glue', 'Step Functions', 'GitLab CI/CD', 'Data Governance']
    },
    {
      role: 'DevOps Engineer',
      company: 'Rabobank',
      period: 'Oct 2023 - Sep 2025',
      location: 'Utrecht, Netherlands · Hybrid',
      points: [
        'Built and maintained internal platforms for the Financial Economic Crime department, used by CDD analysts.',
        'Improved the GDPR transaction filtering process used by 30+ teams, making filtering of sensitive data more accurate.',
        'With Rabo Partnerships and the World Food Programme, built a mobile app and Power BI dashboard assessing farmers\' readiness for finance in Kenya, Rwanda and Tanzania.',
        'Part of the Digital Platform team for the Business Banking app (web and mobile), maintaining key features at 3M requests per day.'
      ],
      tags: ['Application Development', 'Front-End', 'Power BI', 'Incident Management']
    },
    {
      role: 'Webtech Student Assistant & App Development Teaching Assistant',
      company: 'Eindhoven University of Technology',
      period: 'Feb 2023 - Jul 2023',
      location: 'Eindhoven, Netherlands · Part-time',
      points: [
        'Supported students in web technologies (HTML, Arduino IDE) and Android app development, including sprint planning.'
      ],
      tags: ['HTML', 'Android Development', 'Teaching']
    }
  ];
}
