import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasComponent } from './ventas.component';
import { ContadoComponent } from './contado/contado.component';
import { CreditoComponent } from './credito/credito.component';


@NgModule({
  declarations: [
    VentasComponent,
    ContadoComponent,
    CreditoComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
