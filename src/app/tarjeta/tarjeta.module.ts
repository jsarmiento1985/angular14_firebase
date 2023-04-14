import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { TarjetaComponent } from './tarjeta.component';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarjetaComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TarjetaModule { }
