import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-archivo',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-archivo.component.html',
  styleUrl: './form-archivo.component.css'
})
export class FormArchivoComponent {

  archivoForm!: FormGroup;

  onSubmit(){

  }

  onGoBack(){}

}
