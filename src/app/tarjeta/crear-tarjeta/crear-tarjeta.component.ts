import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from 'src/app/models/TarjetaCredito';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent {
  loading = false;
  form :FormGroup;

  titulo = 'Agregar tarjeta';
  id: string | undefined;

  constructor(private fb: FormBuilder, private _tarjetaService: TarjetaService, private toastr: ToastrService){

    this.form = this.fb.group({
      titular : ['',Validators.required],
      numeroTarjeta : ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion : ['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    });

  }
  
  ngOnInit(): void{
    this._tarjetaService.getTarjetaEdit().subscribe(data =>{
      console.log(data);
      this.id = data.id;
      this.titulo = 'Editar tarjeta';
      this.form.patchValue({
        titular : data.titular,
        numeroTarjeta : data.numeroTarjeta,
        fechaExpiracion : data.fechaExpiracion,
        cvv : data.cvv,
      });
    })
  }

  guardarTarjeta() {

    if(this.id === undefined){
    //se crea una nueva tarjeta
    this.agregarTarjeta();

    }else{
        //se edita una nueva tarjeta
        this.editarTarjeta(this.id);
    }

   }

   agregarTarjeta(){
    const TARJETA : TarjetaCredito = {
      titular: this.form.value.titular,
      numeroTarjeta: this.form.value.numeroTarjeta,
      fechaExpiracion: this.form.value.fechaExpiracion,
      cvv: this.form.value.cvv,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
     }
     console.log(TARJETA);
     this.loading = true;
     this._tarjetaService.guardarTarjeta(TARJETA).then(()=>{
     this. loading = false;
      console.log('Tarjeta Registrada');
      this.toastr.success('Tarjeta Registrada con éxito.', 'Registro de tarjeta');
      this.form.reset();
     }, error => {
      this.loading = false;
      console.log('Tarjeta con error: ' + error);
      this.toastr.error('Tarjeta Registrada sin éxito.', 'Error en registro de tarjeta');
     })

    }

    editarTarjeta(id: string){
      const TARJETA : any = {
        titular: this.form.value.titular,
        numeroTarjeta: this.form.value.numeroTarjeta,
        fechaExpiracion: this.form.value.fechaExpiracion,
        cvv: this.form.value.cvv,
        fechaActualizacion: new Date(),
       }
       console.log(TARJETA);
       this.loading = true;
       this._tarjetaService.editarTarjeta(id,TARJETA).then(()=>{
       this. loading = false;
        console.log('Tarjeta Actualizada');
        this.toastr.info('Tarjeta Actualizada con éxito.', 'Registro de tarjeta Actualizado');
        this.form.reset();
       }, error => {
        this.loading = false;
        console.log('Tarjeta con error: ' + error);
        this.toastr.error('Tarjeta Actualizada sin éxito.', 'Error en actualización de tarjeta');
       })
    }

}
 