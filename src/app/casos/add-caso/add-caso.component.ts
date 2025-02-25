import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { FormCaseComponent } from '../form-case/form-case.component';


@Component({
  selector: 'app-add-caso',
  standalone: true,
  imports: [SidenavComponent, FormCaseComponent],
  templateUrl: './add-caso.component.html',
  styleUrl: './add-caso.component.css'
})
export class AddCasoComponent {

}
