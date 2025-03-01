export class Case {

   id: number;
   nro_expediente: string;
   movil_afectado: string;
   subtipo_irregularidad: string;
   duracion: number;
   deteccion: string;
   conclusiones: string;
   fecha_inicio: string;
   tipo_caso: string;
   objetivo: string;
   modus_operandi: string;
   diagnostico: string;
   observacion: string;
   investigador: number;
   tipo_irregularidad: string;
   incidencia: string;
   area_apoyo: string;
   estado: string;
   soporte: string;
 
  constructor(
  ) {
      this.id= 0,
      this.nro_expediente= "",
      this.movil_afectado= "",
      this.subtipo_irregularidad= "",
      this.objetivo= "",
      this.modus_operandi= "",
      this.area_apoyo= "",
      this.fecha_inicio= "",
      this.tipo_caso= "",
      this.objetivo= "",
      this.deteccion= "",
      this.diagnostico= "",
      this.observacion= "",
      this.investigador= 0,
      this.tipo_irregularidad= "",
      this.incidencia= "",
      this.area_apoyo= "",
      this.estado= "",
      this.soporte= "",
      this.conclusiones="",
      this.duracion= 0

    }

    static registrar_caso(value: number): boolean{
        return value == 0? false : true;
    }
  }