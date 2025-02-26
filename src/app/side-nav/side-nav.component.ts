import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UsuarioBdService } from '../service/usuario-bd.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SidenavComponent implements OnInit {
  rol: number | null = null; // Almacenaremos el rol del usuario 

  constructor(private router: Router, private usuarioBdService: UsuarioBdService) { }

  ngOnInit(): void {
    const usuario = 'nombreUsuario'; 
    this.usuarioBdService.obtenerRolUsuario(usuario, (rol) => {
      this.rol = rol; // Guardamos el rol obtenido
      console.log('Rol del usuario:', this.rol);
    });
  }

  logout() {
    // Implementar la lógica de cierre de sesión
    this.router.navigate(['/login']);
    console.log('Logging out...');
  }
}
