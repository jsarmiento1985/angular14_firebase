import { Injectable, inject } from '@angular/core';
import { TarjetaCredito } from '../models/TarjetaCredito';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TarjetaService {

  constructor(private firebase: AngularFirestore) {}

  guardarTarjeta(tarjeta: TarjetaCredito):Promise<any>{
    return this.firebase.collection('tarjetas').add(tarjeta);
    

  }
  
}

