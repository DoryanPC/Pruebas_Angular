import { Component } from '@angular/core';

@Component({
  selector: 'app-component-formulario',
  templateUrl: './component-formulario.component.html',
  styleUrls: ['./component-formulario.component.css']
})
export class ComponentFormularioComponent {
  
  usuario_saludado:Boolean=false;

  mostrar_en_consola(nombre:string){
    alert("Bienvenido:"+nombre);
    this.usuario_saludado=true;
  }

}
