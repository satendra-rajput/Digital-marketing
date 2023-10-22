import { Component } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent {



  isvalid:boolean=false;
  isvalidquiz:boolean=false;
  isvaliddigitak:boolean=false;
  isvalidresources:boolean=false;
  

  tutorial(){
    this. isvaliddigitak=false;
  }

  exercises(){
    this. isvaliddigitak=false;
  }

  digitak(){  
    this.isvalid=false;
    this.isvalidquiz=false;
    this. isvaliddigitak=true;
    this. isvalidresources=false;
  }

  // resources(){
  //   this.isvalid=false;
  //   this.isvalidquiz=false;
  //   this. isvaliddigitak=false;
  //   this. isvalidresources=true;
  // }

  isvalis:boolean=false;


  logout(){
    this.isvalis=true;
  }

  url="assets/image/home/hero-bg.png";
}

