import { Case } from './case.model';


export class Avance {
    constructor(
      public avance: string,
      public fecha: string,
      public comentarios: string,
      public caso: Case
    ) {}
  }