import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-our-card',
  templateUrl: './our-card.component.html',
  styleUrls: ['./our-card.component.css']
})
export class OurCardComponent {

  constructor(public dialog: MatDialog){

  }

  // this is s kareena 
  // openDialogsatendra() {
  //   this.dialog.open(SatendraCardComponent, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  }
