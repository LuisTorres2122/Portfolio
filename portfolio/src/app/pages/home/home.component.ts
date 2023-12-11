import { Component, ElementRef, Renderer2 } from '@angular/core';
import { PDFService } from 'src/services/pdf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAnimated = true;

  constructor(private pdfService: PDFService, private el: ElementRef) {}

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

  dowloadPdf(): void {
    this.pdfService.descargarPDF('../../../assets/Currículum Vitae CV.pdf');
  }
}
