import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {AulasComponent} from './aulas/aulas.component';
import { DepartamentosComponent } from './departamentos/departamentos.component'; 
import { HomeComponent } from './home/home.component';
import { MateriasComponent } from './materias/materias.component';
import { PaginanoexisteComponent } from './paginanoexiste/paginanoexiste.component';


const rutas: Routes = [
  { path : 'inicio', component: HomeComponent},
  { path : 'aula', component: AulasComponent},
  { path : 'depar', component: DepartamentosComponent},
  { path : 'mat', component: MateriasComponent},
  { path : '', redirectTo: 'inicio',pathMatch: 'full'},
  { path: 'ven', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
  { path: 'com', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule) },
  { path: 'pat', loadChildren: () => import('./patrimonio/patrimonio.module').then(m => m.PatrimonioModule) },
  { path: 'pre', loadChildren: () => import('./presupuesto/presupuesto.module').then(m => m.PresupuestoModule) },
  { path: 'gas', loadChildren: () => import('./gastos/gastos.module').then(m => m.GastosModule) },
  { path: 'tar', loadChildren: () => import('./tarjeta/tarjeta.module').then(m => m.TarjetaModule) },
  { path : 'pagno', component: PaginanoexisteComponent},
  { path : '**', component: PaginanoexisteComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
