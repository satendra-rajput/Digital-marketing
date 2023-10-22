import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  digitalclick:boolean=false;
  careerclick:boolean=false;
  businessclick:boolean=false;

  @HostListener('mou')

Logout(){
    
}

Digital(){
  this.digitalclick=true;
  this.careerclick=false;
  this.businessclick=false;
}

Career(){
  this.digitalclick=false;
  this.careerclick=true;
  this.businessclick=false;
}

Business(){
  this.digitalclick=false;
  this.careerclick=false;
  this.businessclick=true;
}
}

