import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Case } from '../../models/case.model';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CaseService } from '../../service/case.service';

@Component({
  selector: 'app-form-cerrar-caso',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-cerrar-caso.component.html',
  styleUrl: './form-cerrar-caso.component.css'
})
export class FormCerrarCasoComponent {
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
        observacion: [null, ],
        conclusion: [null, ],
        recomendacion: [null],

      });
    }
    setForm(): void {
      this.caseForm.reset({
      id: 0,
      observacion: "this.casoSelected.actividades",
      conclusion:"this.casoSelected.personas",
      recomendacion:"this.casoSelected.monto_expuesto",
      
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
