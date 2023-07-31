import { Component } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent {
    comidas: any[] = [{
      id: 1,
      nombre: "Papas a la francesa"
    },
    {
      id: 2,
      nombre: "Papas gajo"
    },
    {
      id: 3,
      nombre: "Guacamole"
    },
    {
      id: 4,
      nombre: "Pan de ajo"
    }
  ];

  verDetalles(id: number){
    console.log("El id es: " + id);
  }
}
