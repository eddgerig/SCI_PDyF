import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-case',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-case.component.html',
  styleUrl: './form-case.component.css'
})
export class FormCaseComponent {

  caseForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      support: ['']
    });
  }

  onSubmit() {
    if (this.caseForm.valid) {
      console.log(this.caseForm.value);
      // Handle form submission
    }
  }

  onCancel() {
    this.caseForm.reset();
    // Handle cancellation
  }

}

