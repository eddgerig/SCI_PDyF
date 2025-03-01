import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input()casoSelected : Case = new Case();
  @Output() goBack = new EventEmitter<void>();
  constructor(
    private fb: FormBuilder,
    private caseService: CaseService,
    private cdr: ChangeDetectorRef,
  ) {this.loadForm();}

  ngOnInit() {
    console.log("Form Case Component", this.casoSelected)
    
    if(!this.casoSelected ){
          this.casoSelected = new Case();
        }
    this.setForm(); 

  }
  loadForm(): void {
    this.caseForm = this.fb.group({
      id: [null],
      actividades: [null, ],
      personas: [null, ],
      monto_expuesto: [null],

    });
  }
  setForm(): void {
    this.caseForm.reset({
     id: 0,
     actividades: "this.casoSelected.actividades",
     personas:"this.casoSelected.personas",
     monto_expuesto:"this.casoSelected.monto_expuesto",
     
    });
    this.cdr.detectChanges();
    console.log("setForm",this.caseForm)
  }
  onGoBack() {
    console.log("onGoBack FormCaseComponent")
    this.goBack.emit(); // Emitir el evento
  }

  onSubmit(){
    
    this.onGoBack();
    this.cdr.detectChanges();
  }

  onCancel() {

  }

}
