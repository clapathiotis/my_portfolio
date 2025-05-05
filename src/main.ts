// filepath: /Users/christopherlapathiotis/Desktop/my_portfolio/portfolio/src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()] // Use provideAnimations here
}).catch(err => console.error(err));