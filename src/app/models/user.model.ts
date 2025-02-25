export class IUser{

    id : number;
    nombres: string;
    apellidos: string;
    cedula: number;
    correo: string;
    //telefono: number;
    contrasena: string;
    rol: number;

    constructor(){
        this.id = 0;
        this.nombres = '';
        this.apellidos = '';
        this.cedula = 0;
        this.correo = '';
        //this.telefono = 0;
        this.contrasena = '';
        this.rol = 0;
    }

    static iniciar_session(value: number): boolean{
        return value == 0 ? false : true;
    }
}