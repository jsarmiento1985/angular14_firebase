import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from '../services/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css']
})
export class PresupuestoComponent {
  
  cantidad : number;
  cantidadIncorrecta : boolean;

  constructor(private _presupuestoService : PresupuestoService, private router : Router ){
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  agregar(){
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/gas']);
    }else{
      this.cantidadIncorrecta = true;
    }
  }
}
