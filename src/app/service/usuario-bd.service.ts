import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioBdService {

  usuarios: any[] = [];
  constructor() { }

  public insertarUsuario(nombre: string, apellido: string,ci: number, email: string,user:string, password:string, rol:number) {
    // Llama a la API expuesta
    console.log("insertar usuario");
    (window as any).myAPI.insertUser(nombre,apellido,ci, email,user, password, rol);
  }
  public consultarUsuarios(callback: (rows: any[]) => void) {
    (window as any).myAPI.ipcRenderer.send('consultar-usuarios');

    (window as any).myAPI.ipcRenderer.on('usuarios-consultados', (event: any, arg: { error: any; usuarios: any[]; }) => {
        if (arg.error) {
            console.error(arg.error);
        } else {
          console.log("consulta", arg)
            callback(arg.usuarios);
        }
    });
  }
  
  public eliminarUsuario(id: number) {
    (window as any).myAPI.eliminarUsuario(id); 
  }
  
  public actualizarUsuario(usuarioSeleccionado: any) {
    if (usuarioSeleccionado) {
        (window as any).myAPI.actualizarUsuario(usuarioSeleccionado.id, usuarioSeleccionado.nombre, usuarioSeleccionado.email);

        (window as any).myAPI.ipcRenderer.on('usuario-actualizado', (event: any, arg: { error: any; id: any; nombre: any; email: any; }) => {
            if (arg.error) {
                console.error(arg.error);
            } else {
                // Actualiza la lista de usuarios
                const index = this.usuarios.findIndex(usuario => usuario.id === arg.id);
                if (index !== -1) {
                    this.usuarios[index] = { id: arg.id, nombre: arg.nombre, email: arg.email };
                }
                usuarioSeleccionado = null; // Resetea el usuario seleccionado
                console.log(`Usuario con ID ${arg.id} actualizado.`);
            }
        });
    }
  }

}
