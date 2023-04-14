import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import { KardexComponent } from './kardex/kardex.component';
import { PagosComponent } from './pagos/pagos.component';



@NgModule({
  declarations: [
    AsistenciaComponent,
    KardexComponent,
    PagosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonalModule { }
