import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { saveAs } from 'file-saver';
import { map } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class PDFService{
    constructor(private http: HttpClient){}

    descargarPDF(url:string):void {
        
    
        this.http.get(url, { responseType: 'arraybuffer' })
          .pipe(
            map(response => new Blob([response], { type: 'application/pdf' }))
          )
          .subscribe(blob => {
            saveAs(blob, 'Currículum Vitae CV.pdf');
          });
      }
}