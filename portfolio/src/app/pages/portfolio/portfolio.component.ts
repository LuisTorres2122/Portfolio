import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgLacentral: boolean = false;
  imgLavid: boolean = false;


  changeImageLaCentral():void{
    if(this.imgLacentral){
      this.imgLacentral = false;
    }
    else{
      this.imgLacentral= true;
    }
  }

  changeImageLaVid():void{
    if(this.imgLavid){
      this.imgLavid = false;
    }
    else{
      this.imgLavid= true;
    }
  }
}
