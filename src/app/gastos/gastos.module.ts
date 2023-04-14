import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastosRoutingModule } from './gastos-routing.module';
import { GastosComponent } from './gastos.component';
import { IngresarGastoComponent } from './ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './listar-gasto/listar-gasto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GastosComponent,
    IngresarGastoComponent,
    ListarGastoComponent
  ],
  imports: [
    CommonModule,
    GastosRoutingModule,
    FormsModule
  ]
})
export class GastosModule { }
