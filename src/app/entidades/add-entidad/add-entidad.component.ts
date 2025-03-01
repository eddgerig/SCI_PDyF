import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { TabEntidadesComponent } from '../tab-entidades/tab-entidades.component';
import { FormEntidadComponent } from '../form-entidad/form-entidad.component';
import { IEntidad } from '../../models/entidad.model';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-entidad',
  standalone: true,
  imports: [SidenavComponent, FormEntidadComponent, TabEntidadesComponent],
  templateUrl: './add-entidad.component.html',
  styleUrl: './add-entidad.component.css'
})
export class AddEntidadComponent {
   @Input()entidadSelected : IEntidad = new IEntidad;
     @Output() goBack = new EventEmitter<void>();
         constructor(private fb: FormBuilder){/*this.loadForm();*/}
         ngOnInit() {
           console.log("Entidad seleccionada desde AddEntidad", this.entidadSelected)
         }
         onGoBack() {
          console.log("onGoBack")
          this.goBack.emit(); // Emitir el evento
        }

}
