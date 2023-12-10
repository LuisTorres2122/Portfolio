import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  path:string = "../../../assets/skills/"
  picture:Ipicture[] = [
    {url: this.path+"angular.png"},
    {url: this.path+"css.png"},
    {url: this.path+"html.png"},
    {url: this.path+"js.png"},
    {url: this.path+"Logo_C_sharp.svg.png"},
    {url: this.path+"mysql.png"},
    {url: this.path+"sql server.jpg"},
    {url: this.path+"tailwind.png"},
    {url: this.path+"typescript.png"}
    
  ]


}

interface Ipicture {
  url: String;
}
