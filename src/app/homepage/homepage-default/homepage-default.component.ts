import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-homepage-default',
  templateUrl: './homepage-default.component.html',
  styleUrls: ['./homepage-default.component.css']
})
export class HomepageDefaultComponent implements OnInit, AfterViewInit{

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav;

  constructor(
    private observer:BreakpointObserver,
    private cd:ChangeDetectorRef
  ) { }

  loading = true;
  ngOnInit(){
    this.loading = false;
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:768px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode ='over';
        this.sidenav.close()
      }else{
        this.sidenav.mode ='side';
        this.sidenav.open();
      }
    })
    this.cd.detectChanges();
  } 

  Logout(){
    
  }

}

