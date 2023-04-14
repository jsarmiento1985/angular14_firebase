
export class TarjetaCredito{
    id?: string; //?:opcional para crear y editar, no es obligatorio para crear un objeto
    titular: string;
    numeroTarjeta: string;
    fechaExpiracion: string;
    cvv: number;
    fechaCreacion: Date;
    fechaActualizacion: Date;

    constructor(titular: string,  numeroTarjeta: string, fechaExpiracion: string,  cvv: number ){
        this.titular = titular;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
        this.cvv = cvv;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();

    }

}