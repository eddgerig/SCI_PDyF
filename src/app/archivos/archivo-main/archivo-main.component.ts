import { ChangeDetectorRef, Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { SearchComponent } from '../../search/search.component';
import { RouterModule } from '@angular/router';
import { TableArchivoComponent } from '../table-archivo/table-archivo.component';
import { NgIf } from '@angular/common';
import { AddArchivoComponent } from '../add-archivo/add-archivo.component';


@Component({
  selector: 'app-archivo-main',
  standalone: true,
  imports: [ SidenavComponent, RouterModule, SearchComponent, TableArchivoComponent, NgIf,AddArchivoComponent],
  templateUrl: './archivo-main.component.html',
  styleUrl: './archivo-main.component.css'
})
export class ArchivoMainComponent {
  showAddArchivo = false;

constructor( private cdr: ChangeDetectorRef ) { }


  showAddArchivoForm() {
    //this.casoSelected = null
    this.showAddArchivo = true;
    this.cdr.detectChanges();
    console.log("click");
  }

  hideAddArchivoForm() {
    this.showAddArchivo = false;
    this.cdr.detectChanges();
  }


}
