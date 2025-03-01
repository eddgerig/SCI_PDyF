import { Component, Input, EventEmitter, Output } from '@angular/core';
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
  
  showRegistrarAvances: boolean = false;
  @Input()casoSelected : Case = new Case;
  caseForm!: FormGroup;

      

  constructor(
    private fb: FormBuilder,
    private caseService: CaseService,
    
  
  ) {
    this.loadForm();
    /*
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
    });*/
  }
  ngOnInit() {
    console.log("Form Case Component", this.casoSelected.observacion)
    
    if(!this.casoSelected ){
          this.casoSelected = new Case();
        }
    this.setForm(); 
  }
  loadForm(): void {
    this.caseForm = this.fb.group({
      caseNumber: [null, Validators.required],
      affectedMobile: [null, Validators.required],
      irregularitySubtype: [null],
      duration: [null],
      detection: [null],
      conclusions: [null],
      startDate: [null, Validators.required],
      caseType: [null, Validators.required],
      objective: [null],
      description: [null],
      diagnostic: [null],
      observations: [null],
      investigator: [null, Validators.required],
      irregularityType: [null, Validators.required],
      incidence: [null],
      supportArea: [null],
      actions: [null],
      support: [null],
    });
  }

  setForm(): void {
    this.caseForm.reset({
     caseNumber: this.casoSelected.nro_expediente,
     affectedMobile:this.casoSelected.affectedMobile,
      irregularitySubtype: this.casoSelected.irregularitySubtype,
      duration: this.casoSelected.duration,
      detection: this.casoSelected.detection,
      conclusions: this.casoSelected.conclusions,
      startDate: this.casoSelected.startDate,
      caseType: this.casoSelected.caseType,
      objective: this.casoSelected.objective,
      description: this.casoSelected.description,
      diagnostic: this.casoSelected.diagnostic,
      observations: this.casoSelected.observacion,
      investigator:this.casoSelected.investigator,
      irregularityType: this.casoSelected.irregularityType,
      incidence: this.casoSelected.incidence,
      supportArea: this.casoSelected.incidence,
      actions: this.casoSelected.actions,
      support: this.casoSelected.support,
     
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