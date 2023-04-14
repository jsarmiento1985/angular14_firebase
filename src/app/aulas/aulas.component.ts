import { Component } from '@angular/core';
interface Paises{
  id : number;
  nombre : string;
}

interface Movilidad{
  placa: string;
  modelo: number;
  color: string;
}

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent {
  nombre = 'JOSE'
  apellido = 'sarmiento'
  title= "Estoy en el componente automatico de aulas"

  suma(){
    return 300 + 50;
  }
  frutas : string[] = ['Pera','Manzana','Uva','Mandarina','Banano']
  movil: Movilidad[] = [
   /* {placa : 'bjy606', modelo: 1998, color:'azul'},
    {placa : 'enp041', modelo: 2019, color:'gris'},
    {placa : 'iwt015', modelo: 2016, color:'gris-raton'},
    {placa : 'gzt286', modelo: 2021, color:'rojo'}*/
  ] 

  xvalor2 = false
  xvalor = "Juan Jose Miranda"
  xtipo = "password"
  xpermiso = true
  ximg = "assets/pinguino.jpeg"
  colores : string[] = ['Rojo','Azul','Amarillo,','verde']
  paises : Paises[] = [
    {id:1, nombre:'Argentina'},
    {id:2, nombre:'Brazil'},
    {id:3, nombre:'Colombia'},
    {id:4, nombre:'Estados Unidos'}
  ]

  xenlace = "http://www.google.com.co"
  xper = true
  xclase = "verde"
  xclase2 = "azul"
  xdato = false
}
