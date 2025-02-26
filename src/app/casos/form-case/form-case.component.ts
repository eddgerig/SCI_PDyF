import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Case } from '../../models/case.model';
import { CaseService } from '../../service/case.service';
import { NgIf } from '@angular/common';




@Component({
  selector: 'app-form-case',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgIf ],
  templateUrl: './form-case.component.html',
  styleUrls: ['./form-case.component.css'],
})
export class FormCaseComponent {
  caseForm: FormGroup;
  showRegistrarAvances: boolean = false;

  constructor(
    private fb: FormBuilder,
    private caseService: CaseService,
  
  ) {
    this.caseForm = this.fb.group({
      caseNumber: ['', Validators.required],
      affectedMobile: ['', Validators.required],
      irregularitySubtype: [''],
      duration: [''],
      detection: [''],
      conclusions: [''],
      startDate: ['', Validators.required],
      caseType: ['', Validators.required],
      objective: [''],
      description: [''],
      diagnostic: [''],
      observations: [''],
      investigator: ['', Validators.required],
      irregularityType: ['', Validators.required],
      incidence: [''],
      supportArea: [''],
      actions: [''],
      support: [''],
    });
  }

  onSubmit() {
    if (this.caseForm.valid) {
     /* const caseData = new Case(
        this.caseForm.value.caseNumber,
        this.caseForm.value.affectedMobile,
        this.caseForm.value.irregularitySubtype,
        this.caseForm.value.duration,
        this.caseForm.value.detection,
        this.caseForm.value.conclusions,
        this.caseForm.value.startDate,
        this.caseForm.value.caseType,
        this.caseForm.value.objective,
        this.caseForm.value.description,
        this.caseForm.value.diagnostic,
        this.caseForm.value.observations,
        this.caseForm.value.investigator,
        this.caseForm.value.irregularityType,
        this.caseForm.value.incidence,
        this.caseForm.value.supportArea,
        this.caseForm.value.actions,
        this.caseForm.value.support
      );*/

      //this.caseService.saveCase(caseData);
    }
  }

  onCancel() {
    this.caseForm.reset();
    this.caseService.clearCase();
  }

  onRegistrarAvances() {
    this.showRegistrarAvances = true;
  }
}