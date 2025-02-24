import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './side-nav/side-nav.component';
import { UsuarioBdService } from './service/usuario-bd.service';




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
  constructor(private usuarioBdService: UsuarioBdService) {} 

  ngOnInit() {

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
  }

}
