import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
  currentSection: string = 'home';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.updateCurrentSection();
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.currentSection = section;
    }
  }

  private updateCurrentSection(): void {
    const scrollPosition = window.scrollY;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.sections[i];
      const element = document.getElementById(section);

      if (element && element.offsetTop <= scrollPosition) {
        this.currentSection = section;
        break;
      }
    }
  }
}
