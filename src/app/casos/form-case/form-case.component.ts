import { Component, Input, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
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
  @Input()casoSelected : Case = new Case();
  @Output() goBack = new EventEmitter<void>();
  caseForm!: FormGroup;

      

  constructor(
    private fb: FormBuilder,
    private caseService: CaseService,
    private cdr: ChangeDetectorRef 
    
  
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
    console.log("Form Case Component", this.casoSelected)
    
    if(!this.casoSelected ){
          this.casoSelected = new Case();
        }
    this.setForm(); 
  }

  onGoBack() {
    console.log("onGoBack FormCaseComponent")
    this.goBack.emit(); // Emitir el evento
  }




  loadForm(): void {
    this.caseForm = this.fb.group({
      id: [null],
      nro_expediente: [null, Validators.required],
      movil_afectado: [null, Validators.required],
      subtipo_irregularidad: [null],
      duracion: [null],
      deteccion: [null],
      conclusiones: [null],
      fecha_inicio: [null, Validators.required],
      tipo_caso: [null, Validators.required],
      objetivo: [null],
      modus_operandi: [null],
      diagnostico: [null],
      observaciones: [null],
      investigador: [null],
      //investigador: [null, Validators.required],
      tipo_irregularidad: [null],
      //tipo_irregularidad: [null, Validators.required],
      incidencia: [null],
      area_apoyo: [null],
      estado: [null],
      soporte: [null],
    });
  }

  setForm(): void {
    this.caseForm.reset({
     id: this.casoSelected.id,
     nro_expediente: this.casoSelected.nro_expediente,
     movil_afectado:this.casoSelected.movil_afectado,
      subtipo_irregularidad: this.casoSelected.subtipo_irregularidad,
      duracion: this.casoSelected.duracion,
      deteccion: this.casoSelected.deteccion,
      conclusiones: this.casoSelected.conclusiones,
      fecha_inicio: this.casoSelected.fecha_inicio,
      tipo_caso: this.casoSelected.tipo_caso,
      objetivo: this.casoSelected.objetivo,
      modus_operandi: this.casoSelected.modus_operandi,
      diagnostico: this.casoSelected.diagnostico,
      observacion: this.casoSelected.observacion,
      investigador:this.casoSelected.investigator,
      tipo_irregularidad: this.casoSelected.tipo_irregularidad,
      incidencia: this.casoSelected.incidencia,
      area_apoyo: this.casoSelected.area_apoyo,
      estado: this.casoSelected.estado,
      soporte: this.casoSelected.soporte,
     
    });
  }

  onSubmit() {
    console.log("onSubmit",this.caseForm)
    if (this.caseForm.valid) {
      console.log("********",this.caseForm)
      if(this.caseForm.value['id'] != 0){
  
        this.caseService.actualizarCasoInv(
          this.caseForm.value['id'],
          this.caseForm.value['nro_expediente'],
          this.caseForm.value['fecha_inicio'],
          this.caseForm.value['movil_afectado'],
          this.caseForm.value['tipo_caso'],
          this.caseForm.value['tipo_irregularidad'],
          this.caseForm.value['subtipo_irregularidad'],
          this.caseForm.value['objetivo'],
          this.caseForm.value['incidencia'],
          this.caseForm.value['modus_operandi'],
          this.caseForm.value['area_apoyo'],
          this.caseForm.value['deteccion'],
          this.caseForm.value['diagnostico'],
          this.caseForm.value['estado'],
          this.caseForm.value['observacion'],
          this.caseForm.value['soporte'],
          this.caseForm.value['investigador']
       
        )
      }else{
  
        this.caseService.insertarCaso_inv(
          this.caseForm.value['nro_expediente'],
          this.caseForm.value['fecha_inicio'],
          this.caseForm.value['movil_afectado'],
          this.caseForm.value['tipo_caso'],
          this.caseForm.value['tipo_irregularidad'],
          this.caseForm.value['subtipo_irregularidad'],
          this.caseForm.value['objetivo'],
          this.caseForm.value['incidencia'],
          this.caseForm.value['modus_operandi'],
          this.caseForm.value['area_apoyo'],
          this.caseForm.value['deteccion'],
          this.caseForm.value['diagnostico'],
          this.caseForm.value['estado'],
          this.caseForm.value['observacion'],
          this.caseForm.value['soporte'],
          this.caseForm.value['investigador']
       
        )
      }
      this.onGoBack();
      this.cdr.detectChanges();
     
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
    this.onGoBack();
    this.cdr.detectChanges();
    
  }

  onCancel() {
    this.caseForm.reset();
    this.caseService.clearCase();
  }

  onRegistrarAvances() {
    this.showRegistrarAvances = true;
  }
}