import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { TabEntidadesComponent } from '../tab-entidades/tab-entidades.component';
import { FormEntidadComponent } from '../form-entidad/form-entidad.component';
@Component({
  selector: 'app-add-entidad',
  standalone: true,
  imports: [SidenavComponent, FormEntidadComponent, TabEntidadesComponent],
  templateUrl: './add-entidad.component.html',
  styleUrl: './add-entidad.component.css'
})
export class AddEntidadComponent {

}
