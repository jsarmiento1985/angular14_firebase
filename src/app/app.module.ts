import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 

import { AppComponent } from './app.component';
import {MateriasComponent} from './materias/materias.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { AulasComponent } from './aulas/aulas.component';
import { HomeComponent } from './home/home.component';
import { PaginanoexisteComponent } from './paginanoexiste/paginanoexiste.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MateriasComponent,
    DepartamentosComponent,
    AulasComponent,
    HomeComponent,
    PaginanoexisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
         provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
