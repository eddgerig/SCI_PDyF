import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { FormCaseComponent } from '../form-case/form-case.component';
import { TabsComponent } from '../tabs/tabs.component';
import { Case } from '../../models/case.model';
import { FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add-caso',
  standalone: true,
  imports: [SidenavComponent, FormCaseComponent, TabsComponent, RouterModule, CommonModule],
  templateUrl: './add-caso.component.html',
  styleUrl: './add-caso.component.css'
})
export class AddCasoComponent {
  @Output() caseAdded = new EventEmitter<any>();
  @Input()casoSelected : Case = new Case;
  @Output() goBack = new EventEmitter<void>();
    
      constructor(private fb: FormBuilder){/*this.loadForm();*/}
      ngOnInit() {
        console.log("AddCaseComponent", this.casoSelected)
      }

      onGoBack() {
        console.log("onGoBack")
        this.goBack.emit(); // Emitir el evento
      }
}
