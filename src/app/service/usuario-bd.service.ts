import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioBdService {

  usuarios: any[] = [];
  private loginSubject = new Subject<boolean>();
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
  /*public buscarUser(user: string) {
    return (window as any).myAPI.buscarUser(user); 
  }*/

  public buscarUser(user: string) {
    if (user) {
        (window as any).myAPI.buscarUser(user);

        (window as any).myAPI.ipcRenderer.on('usuario-buscado', (event: any, arg: { error: any; usuarios: any; }) => {
            if (arg.error) {
                console.error(arg.error);
            } else {
              console.log(`Usuarios encontrados:`, arg);
                //this.usuariosBuscados = arg.usuarios;
                /*if (this.usuariosBuscados.length === 0) {
                    console.log(`No se encontraron usuarios con el nombre "${user}".`);
                } else {
                    console.log(`Usuarios encontrados:`, this.usuariosBuscados);
                }*/
            }
        });
    } else {
        console.log('Por favor ingresa un nombre para buscar.');
    }
  }

  // Obtener el rol del usuario:

  public obtenerRolUsuario(user: string, callback: (rol: number | null) => void) {
    if (user) {
        (window as any).myAPI.obtenerRol(user);

        (window as any).myAPI.ipcRenderer.once('rol-obtenido', (event: any, arg: { error: any; rol: number; }) => {
            if (arg.error) {
                console.error(arg.error);
                callback(null);
            } else {
                console.log(`Rol del usuario ${user}: ${arg.rol}`);
                callback(arg.rol);
            }
        });
    } else {
        console.log('Por favor ingresa un usuario para obtener su rol.');
        callback(null);
    }
}





  

  public login(user: string, pass: string): Observable<boolean> {
    if (user) {
      (window as any).myAPI.login(user, pass);

      (window as any).myAPI.ipcRenderer.on('login_valid', (event: any, arg: any) => {
        if (arg.error) {
          console.error(arg.error);
          this.loginSubject.next(false); // Emitir false en caso de error
        } else {
          console.log(`login_valid:`, arg);
          const valid = IUser.iniciar_session(arg['rows'].length);
          this.loginSubject.next(valid); // Emitir el valor válido
        }
      });
    } else {
      console.log('Por favor ingresa un nombre para buscar.');
      this.loginSubject.next(false); // Emitir false si no hay usuario
    }
    
    return this.loginSubject.asObservable(); // Devolver el observable
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
