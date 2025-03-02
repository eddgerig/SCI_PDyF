import { ChangeDetectorRef, Component } from '@angular/core';
import { Archivo } from '../../models/archivosFactoryMethod.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-archivo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-archivo.component.html',
  styleUrl: './table-archivo.component.css'
})
export class TableArchivoComponent {

}
