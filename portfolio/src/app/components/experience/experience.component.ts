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
      role: 'Data Engineer',
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
        'Part of the restructure of the GDPR transaction filter used by 30+ teams: 3x more grey-zone transactions categorised, and mislabelling of sensitive transactions cut from 2.6% to 0.11% (Python, PySpark, Databricks, Naive Bayes).',
        'Test automation specialist: built a test suite from scratch and automated production releases with Azure Pipelines and Robot Framework.',
        'Hackathon-winning idea became an independent bank project, saving analysts about 5,000 hours a year (roughly EUR 110k).',
        'With Rabo Partnerships and the World Food Programme, built a mobile app and Power BI dashboard assessing farmers\' readiness for finance in Kenya, Rwanda and Tanzania.',
        'Part of the Digital Platform team for the Business Banking app (web and mobile), maintaining key features at 3M requests per day.'
      ],
      tags: ['Python', 'PySpark', 'Databricks', 'Angular', 'Spring Boot', 'Flutter', 'Azure Pipelines', 'Power BI']
    },
    {
      role: 'Software Engineer (BSc thesis project)',
      company: 'Philips',
      period: 'Apr 2023 - Jul 2023',
      location: 'Netherlands · Project based',
      points: [
        'Team lead for developing a tool for Philips MRI machines (the ConSEPt graduation project).',
        'Integrated concolic, mutation and fuzzing testing techniques for C/C++ files, using Python, Docker, clang and KLEE.',
        'Worked in a cross-functional team, helped plan development and contributed to the CI/CD pipeline.'
      ],
      tags: ['Python', 'Docker', 'C/C++', 'Test automation', 'CI/CD']
    },
    {
      role: 'Webtech Student Assistant & App Development Teaching Assistant',
      company: 'Eindhoven University of Technology',
      period: 'Feb 2023 - Jul 2023',
      location: 'Eindhoven, Netherlands · Part-time',
      points: [
        'Guided 5 student groups of about 7 in their app development and WebTech + HTI courses, all delivering MVPs that met academic and usability requirements.',
        'Acted as stakeholder and solutions architect for the teams, with positive feedback from course evaluators.'
      ],
      tags: ['HTML', 'Android Development', 'Teaching']
    }
  ];
}
