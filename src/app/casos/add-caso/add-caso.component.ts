import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { FormCaseComponent } from '../form-case/form-case.component';
import { TabsComponent } from '../tabs/tabs.component';
import { Case } from '../../models/case.model';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-add-caso',
  standalone: true,
  imports: [SidenavComponent, FormCaseComponent, TabsComponent],
  templateUrl: './add-caso.component.html',
  styleUrl: './add-caso.component.css'
})
export class AddCasoComponent {
  @Output() caseAdded = new EventEmitter<any>();
  @Input()casoSelected : Case = new Case;
    
      constructor(private fb: FormBuilder){/*this.loadForm();*/}
      ngOnInit() {
        console.log("AddCaseComponent", this.casoSelected)
      }
}
