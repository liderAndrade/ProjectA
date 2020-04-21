import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit{

  constructor(){
    console.log("Dentro del Constructor");
  }

  ngOnInit(){
    console.log("Dentro de On Init");
  }
}
