import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArchivosService } from '../../service/archivos.service';
import { Archivo } from '../../models/archivosFactoryMethod.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-archivo',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './table-archivo.component.html',
  styleUrls: ['./table-archivo.component.css']
})
export class TableArchivoComponent implements OnInit {

  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.cargarArchivos();
  }

  cargarArchivos(): void {
    this.archivosService.consultarArchivos().subscribe(
      (archivos: Archivo[]) => {
        this.archivos = archivos;
        console.log("Archivo desde table:", this.archivos);
        this.cdr.detectChanges();
      },
      (error: any) => {
        console.error('Error al cargar archivos:', error);
      }

    );
    
  }

  verArchivo(archivo: Archivo): void {
    console.log('Ver archivo:', archivo);
  }
}