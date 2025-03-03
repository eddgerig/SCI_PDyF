import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CaseService } from '../../service/case.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioBdService } from '../../service/usuario-bd.service';

@Component({
  selector: 'app-table-casos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-casos.component.html',
  styleUrl: './table-casos.component.css'
})
export class TableCasosComponent {
  rol: number | null = null;
  user_id: number |null = null;
  caso: any = []
  casoSelected: any = null;
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private caseService: CaseService,
      private cdr: ChangeDetectorRef,
      private router: Router, 
      private usuarioBdService: UsuarioBdService
      
    ) {} 
  
    ngOnInit() {
      
      this.rol = this.usuarioBdService.getCurrentUserRole();
      this.user_id = this.usuarioBdService.getCurrentUserUser();
      this.cdr.detectChanges();
      console.log("ROl DEL USUARIO TABLE CASOS:", this.rol);
      this.refresh();
    }
     
  
  refresh(){

    console.log("refresh",this.user_id )
    if(this.user_id == 1){

      this.caseService.consultarCaso_Inv((rows) => {
        this.caso = rows;
        console.log("consultarCaso_Inv",this.caso);
        this.cdr.detectChanges();
      });
    }else{
      this.caseService.buscarCasoPorInv(this.user_id || -1).
      subscribe((rows) => {
        this.caso = rows;
        console.log("buscarCasoPorInv",this.caso);
        this.cdr.detectChanges();
      });
    }
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
