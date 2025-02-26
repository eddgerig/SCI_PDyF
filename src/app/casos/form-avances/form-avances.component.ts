import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Case } from '../../models/case.model';
import { CaseService } from '../../service/case.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-avances',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-avances.component.html',
  styleUrl: './form-avances.component.css'
})
export class FormAvancesComponent {
caseForm: any;

  onSubmit(){}

  onCancel() {

  }

}
