import { Component } from '@angular/core';
import { SidenavComponent } from '../../side-nav/side-nav.component';
import { TableCasosComponent } from '../table-casos/table-casos.component';
import { SearchComponent } from '../../search/search.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-casos-main',
  standalone: true,
  imports: [SidenavComponent, TableCasosComponent, SearchComponent, RouterModule],
  templateUrl: './casos-main.component.html',
  styleUrl: './casos-main.component.css'
})
export class CasosMainComponent {

}
