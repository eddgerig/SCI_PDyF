import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { SearchComponent } from '../../search/search.component';
import { RouterModule } from '@angular/router';
import { TableArchivoComponent } from '../table-archivo/table-archivo.component';


@Component({
  selector: 'app-archivo-main',
  standalone: true,
  imports: [ SidenavComponent, RouterModule, SearchComponent, TableArchivoComponent],
  templateUrl: './archivo-main.component.html',
  styleUrl: './archivo-main.component.css'
})
export class ArchivoMainComponent {

}
