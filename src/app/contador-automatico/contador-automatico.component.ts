import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador-automatico',
  templateUrl: './contador-automatico.component.html',
  styleUrls: ['./contador-automatico.component.css']
})
export class ContadorAutomaticoComponent {

  constructor() { }

  ngOnInit(): void {

  }

  nombre_programador = 'Doryan Pérez';

  persona:Persona = { //para pasar atributos de objetos que no sean string es necesario creacion y seteo de una interface
    titulo:'Licenciado',
    anios_exp:4,
    edad:26,
    sexo:'M'
  };

  numero:number = 0;
  

  decrementar(){
    this.numero--;
  }

  aumentar(){
    this.numero++;
  }


}
