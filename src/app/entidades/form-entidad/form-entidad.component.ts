import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IEntidad } from '../../models/entidad.model';
import { EntidadBdService } from '../../service/entidad-bd.service';
@Component({
  selector: 'app-form-entidad',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './form-entidad.component.html',
  styleUrl: './form-entidad.component.css'
})
export class FormEntidadComponent {
    @Output() goBack = new EventEmitter<void>();
   @Input()entidadSelected : IEntidad = new IEntidad;
    entidadForm!: FormGroup;

constructor(
    private fb: FormBuilder,
    private entidadService : EntidadBdService,
    private cdr: ChangeDetectorRef 
    
  
  ) {
    //this.loadForm();
  }

  ngOnInit() {
    console.log("Form Entidad Component", this.entidadSelected);
  }


  onGoBack() {
    console.log("onGoBack")
    this.goBack.emit(); // Emitir el evento
  }


}
