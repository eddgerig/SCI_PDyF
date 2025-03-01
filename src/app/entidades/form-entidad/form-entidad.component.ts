import { CommonModule, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.loadForm();
  }

  ngOnInit() {
    console.log("Form Entidad Component", this.entidadSelected);
    if(!this.entidadSelected ){
              this.entidadSelected = new IEntidad();
            }
    this.setForm();
  }

  loadForm(): void {
      this.entidadForm = this.fb.group({
        id: [null],
        tipo_brecha: [null],
        tipo_proyecto: [null],
        procesos_corregidos: [null],
        procesos_realizados: [null],
        investigadores: [null],
        empresas: [null],
        subtipo_ficha: [null],
        tipo_irregularidad: [null],
        subtipo_irregularidad: [null],
        procedencia_casos: [null]
      });
    }

    setForm(): void {
      this.entidadForm.reset({
        id: this.entidadSelected.id,
        tipo_brecha: this.entidadSelected.tipo_brecha,
        tipo_proyecto: this.entidadSelected.tipo_proyecto,
        procesos_corregidos: this.entidadSelected.procesos_corregidos,
        investigadores: this.entidadSelected.investigadores,
        empresas: this.entidadSelected.empresas,
        subtipo_ficha:this.entidadSelected.subtipo_ficha,
        tipo_irregularidad: this.entidadSelected.tipo_irregularidad,
        subtipo_irregularidad: this.entidadSelected.subtipo_irregularidad,
        procedencia_casos: this.entidadSelected.procedencia_casos

      });
    }
  

  onGoBack() {
    console.log("onGoBack")
    this.goBack.emit(); // Emitir el evento
  }


}
