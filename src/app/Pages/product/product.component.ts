import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  datos: Array<any> =  [{
    'Id':1,
    'Nombre':'Lider Ignacio',
    'Apellido':'Andrade Cevallos',
    'Estado':'A'
  },{
    'Id':2,
    'Nombre':'Fernando Luis',
    'Apellido':'Verduga Carrión',
    'Estado':'A'
  },{
    'Id':1,
    'Nombre':'Carlos Andres',
    'Apellido':'Triviño Acosta',
    'Estado':'I'
  },{
    'Id':1,
    'Nombre':'Lider Abdel',
    'Apellido':'Zambrano Zambrano',
    'Estado':'I'
  },
];

  constructor() { }

  ngOnInit() {
  }

  presionado(event){
    
    console.log("event: ", event);
    if(this.datos.length > 1){
      alert("Excelente Tienes Registros");
     
    }
  }
}
