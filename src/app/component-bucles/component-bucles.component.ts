import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-component-bucles',
  templateUrl: './component-bucles.component.html',
  styleUrls: ['./component-bucles.component.css']
})


export class ComponentBuclesComponent {

  personas:Persona[] = [
   {  titulo:'Medito', anios_exp:56,edad:25, sexo:'F'},
   {  titulo:'Maestra', anios_exp:5,edad:29, sexo:'F'},
   {  titulo:'Programador', anios_exp:4,edad:26, sexo:'M'},
   {  titulo:'Cheft', anios_exp:10,edad:5, sexo:'M'},
   {  titulo:'Estilista', anios_exp:10,edad:5, sexo:'?'},
  ];


}
