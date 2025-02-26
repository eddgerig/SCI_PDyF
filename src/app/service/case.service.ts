import { Injectable } from '@angular/core';
import { Case } from '../models/case.model';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  private currentCase: Case | null = null;

  constructor() {}

  saveCase(caseData: Case) {
    this.currentCase = caseData;
    console.log('Caso guardado:', this.currentCase);
  }

  getCurrentCase(): Case | null {
    return this.currentCase;
  }

  clearCase() {
    this.currentCase = null;
  }


  
  public insertarCaso_inv(
    
    nro_expediente :string,
    fecha_inicio   :string,
    movil_afectado   :string,
    tipo_caso   :string,
    tipo_irregularidad   :string,
    subtipo_irregularidad   :string,
    objetivo   :string,
    incidencia   :string,
    modus_operandi   :string,
    area_apoyo   :string,
    deteccion   :string,
    diagnostico   :string,
    estado   :string,
    observacion   :string,
    soporte   :string,
    investigador :number,
  ) {
    // Llama a la API expuesta
    console.log("insertar usuario");

    (window as any).caso_inv.insertarCaso_inv(
    nro_expediente,
    fecha_inicio  ,
    movil_afectado  ,
    tipo_caso  ,
    tipo_irregularidad  ,
    subtipo_irregularidad  ,
    objetivo  ,
    incidencia  ,
    modus_operandi  ,
    area_apoyo  ,
    deteccion  ,
    diagnostico  ,
    estado  ,
    observacion  ,
    soporte  ,
    investigador
    );
  }
  public consultarCaso_Inv(callback: (rows: any[]) => void) {
    (window as any).caso_inv.ipcRenderer.send('consultar-caso_inv');

    (window as any).caso_inv.ipcRenderer.on('caso_inv-consultados', (event: any, arg: { error: any; data: any[]; }) => {
        if (arg.error) {
            console.error(arg.error);
        } else {
          console.log("consulta", arg)
            callback(arg.data);
        }
    });
  }
}