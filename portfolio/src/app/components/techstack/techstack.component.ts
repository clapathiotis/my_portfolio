import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUpAnimation } from '../shared/animations/animations'
import { IntersectionObserverDirective } from '../shared/animations/intersection-observer.directive'; // Import the directive

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective], // Import CommonModule to use NgFor and other directives
  templateUrl: './techstack.component.html',
  styleUrls: ['./techstack.component.scss'],
  animations: [fadeInUpAnimation]
})
export class TechstackComponent {
  isVisible = false; // Track visibility state

  onVisibilityChange(visible: boolean): void {
    this.isVisible = visible; // Update visibility state
  }

  groups = [
    { title: 'Data & Cloud', icon: 'fas fa-cloud', items: ['AWS Glue', 'AWS Step Functions', 'Amazon Redshift', 'PySpark', 'Databricks', 'Python', 'SQL', 'Power BI', 'REST APIs'] },
    { title: 'DevOps', icon: 'fas fa-gears', items: ['Terraform', 'GitLab CI/CD', 'Azure DevOps', 'GitHub', 'Incident management'] },
    { title: 'Web', icon: 'fas fa-code', items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML/SCSS', 'Node.js', 'Leaflet'] },
    { title: 'Backend & Data stores', icon: 'fas fa-database', items: ['Supabase', 'PostgreSQL', 'MySQL', 'Spring Boot', 'Java', 'Firebase'] },
    { title: 'AI & Automation', icon: 'fas fa-wand-magic-sparkles', items: ['Gemini API', 'Supabase Edge Functions', 'LLM-powered features'] },
    { title: 'Also used', icon: 'fas fa-toolbox', items: ['PEGA', 'Kotlin', 'Flutter', 'Postman', 'WordPress', 'Jupyter'] }
  ];
}
