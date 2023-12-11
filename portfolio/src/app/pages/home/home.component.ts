import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  isAnimated = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const animatedText = this.el.nativeElement.querySelector('#text');

    animatedText.addEventListener('animationend', () => {
      this.isAnimated = !this.isAnimated;
      // Vuelve a agregar la clase animada después de un breve período
      setTimeout(() => {
        this.isAnimated = !this.isAnimated;
      }, 3000);
    });
  }
}
