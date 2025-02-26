export class Case {

   id: number;
   caseNumber: string;
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
   observations: string;
   investigator: number;
   irregularityType: string;
   incidence: string;
   supportArea: string;
   actions: string;
   support: string;
 
  constructor(
  ) {
      this.id= 0,
      this.caseNumber= "",
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
      this.observations= "",
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