import { Component } from '@angular/core';
import { TableUsersComponent } from '../table-users/table-users.component';
import { SidenavComponent } from '../side-nav/side-nav.component';
import { SearchComponent } from '../search/search.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-main',
  standalone: true,
  imports: [ TableUsersComponent, SidenavComponent, SearchComponent, RouterModule, NgIf, AddUserComponent  ],
  templateUrl: './users-main.component.html',
  styleUrl: './users-main.component.css'
})
export class UsersMainComponent {

  searchTerm: string = ''; // Almacena el término de búsqueda

  showAddUser = false; // Variable de estado para controlar la visibilidad

  // Función para mostrar el formulario add-user
  showAddUserForm() {
    this.showAddUser = true;
  }

  // Función para volver a la tabla
  hideAddUserForm() {
    this.showAddUser = false;
  }

  // Función para manejar la búsqueda (si es necesario)
  onSearch(query: string) {
    console.log('Búsqueda:', query);
    // Aquí puedes agregar la lógica de búsqueda
  }

  // Función para agregar un nuevo usuario a la tabla
  agregarUsuario(nuevoUsuario: any) {
    // Aquí puedes agregar la lógica para enviar el nuevo usuario a la tabla
    alert(`Datos del nuevo usuario:\n
      Nombre: ${nuevoUsuario.nombre}\n
      Apellido: ${nuevoUsuario.apellido}\n
      Cédula: ${nuevoUsuario.cedula}\n
      Teléfono: ${nuevoUsuario.telefono}\n
      Correo: ${nuevoUsuario.correo}\n
      Rol: ${nuevoUsuario.rol}\n
      Contraseña: ${nuevoUsuario.contrasena}\n
      Nombre de usuario: ${nuevoUsuario.username}`);
    console.log('Nuevo usuario:', nuevoUsuario);
    
  }
}
