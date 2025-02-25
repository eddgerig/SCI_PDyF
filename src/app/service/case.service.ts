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
}