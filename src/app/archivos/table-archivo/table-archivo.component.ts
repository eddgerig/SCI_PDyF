import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
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
export class TableArchivoComponent {
    @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();

  archivos: Archivo[] = [];

  constructor(private archivosService: ArchivosService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.cargarArchivos();
  }
  onRowSelect(event: any): void {
    console.log("Archivo seleccionado", event)
    this.onSelected.next(event);

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
    
  
    // Construir el mensaje para el alert
    const mensaje = `
      ID Archivo: ${archivo.id_archivo}
      
      Tipo: ${archivo.tipo}
      Descripción: ${archivo.descripcion}
      
      
    `;
    
  
    // Mostrar el alert con la información del archivo
    alert(mensaje);
  }
}