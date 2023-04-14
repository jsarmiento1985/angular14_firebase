import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresupuestoRoutingModule } from './presupuesto-routing.module';
import { PresupuestoComponent } from './presupuesto.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PresupuestoComponent
  ],
  imports: [
    CommonModule,
    PresupuestoRoutingModule,
    FormsModule
  ]
})
export class PresupuestoModule { }
