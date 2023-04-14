import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    ProveedoresComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }
