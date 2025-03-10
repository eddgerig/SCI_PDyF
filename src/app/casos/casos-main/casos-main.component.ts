import { ChangeDetectorRef, Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { TableCasosComponent } from '../table-casos/table-casos.component';
import { SearchComponent } from '../../search/search.component';
import { Router, RouterModule } from '@angular/router';
import { UsuarioBdService } from '../../service/usuario-bd.service';
import { NgIf } from '@angular/common';
import { AddCasoComponent } from "../add-caso/add-caso.component";
@Component({
  selector: 'app-casos-main',
  standalone: true,
  imports: [SidenavComponent, TableCasosComponent, SearchComponent, RouterModule, NgIf, AddCasoComponent],
  templateUrl: './casos-main.component.html',
  styleUrl: './casos-main.component.css'
})
export class CasosMainComponent {
  rol: number | null = null; // Almacenaremos el rol del usuario 
  casoSelected: any = null;
  showAddCase = false;
  constructor(private router: Router, private usuarioBdService: UsuarioBdService, private cdr: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.rol = this.usuarioBdService.getCurrentUserRole();
    console.log("ROl DEL USUARIO CASOS MAIN:", this.rol);
  }
  showAddCaseForm() {
    this.casoSelected = null
    this.showAddCase = true;
    this.cdr.detectChanges();
    console.log("click");
  }
  onCaseSelected($event: any){
    console.log('Usuario seleccionado desde case-main:', $event);
    // Aquí puedes agregar la lógica para manejar el evento de selección del usuario
    this.showAddCase = true;
    this.casoSelected = $event;
    this.cdr.detectChanges();
  }
  hideAddCaseForm() {
    this.showAddCase = false;
    this.cdr.detectChanges();
  }

}
