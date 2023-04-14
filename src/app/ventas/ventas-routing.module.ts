import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasComponent } from './ventas.component';
import { ContadoComponent } from './contado/contado.component';
import { CreditoComponent } from './credito/credito.component';

const routes: Routes = [
  
  { path: '', component: VentasComponent,
  
    children:[
      {path:'con', component:ContadoComponent},
      {path:'cre', component:CreditoComponent},

    ]


  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
