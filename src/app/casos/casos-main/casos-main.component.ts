import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { TableCasosComponent } from '../table-casos/table-casos.component';
import { SearchComponent } from '../../search/search.component';
import { Router, RouterModule } from '@angular/router';
import { UsuarioBdService } from '../../service/usuario-bd.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-casos-main',
  standalone: true,
  imports: [SidenavComponent, TableCasosComponent, SearchComponent, RouterModule, NgIf],
  templateUrl: './casos-main.component.html',
  styleUrl: './casos-main.component.css'
})
export class CasosMainComponent {
  rol: number | null = null; // Almacenaremos el rol del usuario 

  constructor(private router: Router, private usuarioBdService: UsuarioBdService) { }

  ngOnInit(): void {
    this.rol = this.usuarioBdService.getCurrentUserRole();
    console.log("ROl DEL USUARIO CASOS MAIN:", this.rol);
  }

}
