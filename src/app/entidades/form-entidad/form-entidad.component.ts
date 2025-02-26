import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-entidad',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './form-entidad.component.html',
  styleUrl: './form-entidad.component.css'
})
export class FormEntidadComponent {

}
