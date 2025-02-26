import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { SearchComponent } from '../../search/search.component';
import { TableEntidadesComponent } from '../table-entidades/table-entidades.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-entidades-main',
  standalone: true,
  imports: [SidenavComponent, SearchComponent, TableEntidadesComponent, RouterModule],
  templateUrl: './entidades-main.component.html',
  styleUrl: './entidades-main.component.css'
})
export class EntidadesMainComponent {

}
