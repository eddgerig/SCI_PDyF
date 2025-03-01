export class Case {

   id: number;
   nro_expediente: string;
   affectedMobile: string;
   irregularitySubtype: string;
   duration: number;
   detection: string;
   conclusions: string;
   startDate: string;
   caseType: string;
   objective: string;
   description: string;
   diagnostic: string;
   observacion: string;
   investigator: number;
   irregularityType: string;
   incidence: string;
   supportArea: string;
   actions: string;
   support: string;
 
  constructor(
  ) {
      this.id= 0,
      this.nro_expediente= "",
      this.affectedMobile= "",
      this.irregularitySubtype= "",
      this.duration= 0,
      this.detection= "",
      this.conclusions= "",
      this.startDate= "",
      this.caseType= "",
      this.objective= "",
      this.description= "",
      this.diagnostic= "",
      this.observacion= "",
      this.investigator= 0,
      this.irregularityType= "",
      this.incidence= "",
      this.supportArea= "",
      this.actions= "",
      this.support= ""

    }

    static registrar_caso(value: number): boolean{
        return value == 0? false : true;
    }
  }