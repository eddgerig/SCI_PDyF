import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CaseService } from '../../service/case.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-casos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-casos.component.html',
  styleUrl: './table-casos.component.css'
})
export class TableCasosComponent {

  caso: any = []
  casoelected: any = null;
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private caseService: CaseService,
      private cdr: ChangeDetectorRef  
    ) {} 
  
    ngOnInit() {
      this.refresh();
    }
  
  refresh(){

    console.log("refresh")
    this.caseService.consultarCaso_Inv((rows) => {
      this.caso = rows;
      console.log(this.caso);
      this.cdr.detectChanges();
    });
  }

  onRowSelect(event: any): void {
    console.log("onRowSelect", event)
    this.onSelected.next(event);
  }
  editarCaso(cs: any) {
    //this.usuarios = this.usuarios.filter(u => u.cedula !== usuario.cedula);
    console.log("Editar cs");
    this.onRowSelect(cs);
  }
}
