//import { Component, EventEmitter, Output } from '@angular/core';

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [FormsModule], // Importa FormsModule para usar ngModel
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() goBack = new EventEmitter<void>(); // Evento para volver atrás
  @Output() userAdded = new EventEmitter<any>(); // Evento para emitir el nuevo usuario
  @Input() usuarioSelected: any = null;

  
  ngOnInit() {
    console.log("AddUserComponent", this.usuarioSelected)
  }
  
  // Función para manejar el botón "Volver atrás"
  onGoBack() {
    console.log("onGoBack")
    this.goBack.emit(); // Emitir el evento
  }
  user = {
    nombre: '',
    cedula: '',
    telefono: '',
    correo: '',
    rol: '',
    contrasena: '',
    username: '',
    apellido:"",
  };


  // Función para manejar el envío del formulario
  onSubmit() {
    if (this.isFormValid()) {
      this.userAdded.emit(this.user); // Emitir el nuevo usuario
      this.resetForm(); // Limpiar el formulario
      this.goBack.emit(); // Volver atrás
    } else {
      alert('Por favor, complete todos los campos obligatorios.');
    }
  }

  // Función para validar el formulario
  isFormValid(): boolean {
    return (
      this.user.nombre.trim() !== '' &&
      this.user.apellido.trim() !== '' &&
      this.user.cedula.trim() !== '' &&
      this.user.telefono.trim() !== '' &&
      this.user.correo.trim() !== '' &&
      this.user.rol.trim() !== '' &&
      this.user.contrasena.trim() !== '' &&
      this.user.username.trim() !== ''
    );
  }

  // Función para limpiar el formulario
  resetForm() {
    this.user = {
      nombre: '',
      apellido: '',
      cedula: '',
      telefono: '',
      correo: '',
      rol: '',
      contrasena: '',
      username: ''
    };
  }


  onCancel() {
    console.log('Formulario cancelado');
    // Aquí puedes agregar la lógica para cancelar (por ejemplo, limpiar el formulario)
    this.user = {
      nombre: '',
      cedula: '',
      telefono: '',
      correo: '',
      rol: '',
      contrasena: '',
      username: '',
      apellido:"",
    };
  }

  
}




/*


export class AddUserComponent {
  @Output() goBack = new EventEmitter<void>(); // Evento para volver atrás

  // Función para manejar el botón "Volver atrás"
  onGoBack() {
    this.goBack.emit(); // Emitir el evento
  }

  /*
  onSubmit() {
  console.log('Usuario agregado');
  this.goBack.emit(); // Cerrar el formulario después de guardar
}
}
  */

