import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {ComprasComponent} from './comprasComponent';
import {ProductosComponent} from './productos/productos.component'
import {ProveedoresComponent} from './proveedores/proveedores.component'

const routes: Routes = [
  { path: "", component:ProductosComponent,
    children: [
      { path: "pro", component:ProveedoresComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
