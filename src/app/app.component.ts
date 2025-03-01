import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersMainComponent } from './users-main/users-main.component';
import { SidenavComponent } from './side-nav/side-nav.component';
import { UsuarioBdService } from './service/usuario-bd.service';
import { CaseService } from './service/case.service';
import { EntidadBdService } from './service/entidad-bd.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SCI';
  usuarios: any[] = [];
  constructor(
    private usuarioBdService: UsuarioBdService,
    private caseService: CaseService,
    private entidadBdService: EntidadBdService,
  ) {} 

  ngOnInit() {

    /*this.usuarioBdService.insertarUsuario(
      'sysadmin', 
      'admin', 
       11111111, 
      'sysadmin@gmail.com',
      'sysadmin',
      'sysadmin123.',
      1);*/

        /*this.usuarioBdService.insertarUsuario(
      'sysadmin', 
      'admin', 
       11111111, 
      'sysadmin@gmail.com',
      'sysadmin',
      'sysadmin123.',
      1);*/
     

    this.usuarioBdService.consultarUsuarios((rows) => {
      this.usuarios = rows;
      console.log(this.usuarios);
    });
//Casi Inv
  /*  this.caseService.insertarCaso_inv(
      '00001', 
      '26/05/2015',  
       "movil afect", 
      'tipo caso',
      'tipo irregular',
      'subtipo irregular',
      'objet',
      'incidnce',
      'modus ope',
      'area apoy',
      'detecc',
      'diagnos',
      'estado',
      'observacion',
      'soporte',
      1
    );*/

    this.caseService.consultarCaso_Inv((rows) => {
      this.usuarios = rows;
      console.log(this.usuarios);
    });
    /*
    this.entidadBdService.insertarEntidad(
      'brecha1',       // tipo_brecha
      'proyecto1',     // tipo_proyecto
      'proceso1',      // procesos_corregidos
      'proceso2',      // procesos_realizados
      'investigador1', // investigadores
      'empresa1',      // empresas
      'subtipo1',      // subtipo_ficha
      'irregularidad1',// tipo_irregularidad
      'subtipo_irreg1',// subtipo_irregularidad
      'caso1'          // procedencia_casos
    );
    */
    // Recargar la lista de entidades después de la inserción
    //this.entidadBdService.cargarEntidades();
  }

}
