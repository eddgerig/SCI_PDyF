export class Case {
    constructor(
      public caseNumber: string,
      public affectedMobile: string,
      public irregularitySubtype: string,
      public duration: number,
      public detection: string,
      public conclusions: string,
      public startDate: string,
      public caseType: string,
      public objective: string,
      public description: string,
      public diagnostic: string,
      public observations: string,
      public investigator: string,
      public irregularityType: string,
      public incidence: string,
      public supportArea: string,
      public actions: string,
      public support: string
    ) {}
  }