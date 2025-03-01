import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadBdService } from '../../service/entidad-bd.service';
import { IEntidad } from '../../models/entidad.model';

@Component({
  selector: 'app-table-entidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-entidades.component.html',
  styleUrls: ['./table-entidades.component.css']
})
export class TableEntidadesComponent implements OnInit {

  entidades: IEntidad[] = [];
  entidadSelected: any = null; // Entidad seleccionada
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>(); // Evento para emitir la entidad seleccionada
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(
    private entidadBdService: EntidadBdService,
    private cdr: ChangeDetectorRef // Para forzar la detección de cambios
  ) { }

  ngOnInit(): void {
    this.cargarEntidades();
  }

  // Método para cargar las entidades
  cargarEntidades() {
    this.entidadBdService.consultarEntidades().subscribe((entidades: any[]) => {
      this.entidades = entidades.map(entidad => IEntidad.fromObject(entidad));
      this.calcularTotalPaginas();
      this.cdr.detectChanges(); // Forzar la detección de cambios
    });
  }

  // Método para calcular el total de páginas
  calcularTotalPaginas() {
    this.totalPages = Math.ceil(this.entidades.length / this.itemsPerPage);
  }

  // Método para cambiar a la página anterior
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // Método para cambiar a la página siguiente
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Método para obtener las entidades de la página actual
  getEntidadesPaginaActual(): IEntidad[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.entidades.slice(startIndex, endIndex);
  }

  // Método para emitir la entidad seleccionada
  onRowSelect(event: any): void {
    console.log("Entidad seleccionada:", event);
    this.onSelected.emit(event); // Emitir la entidad seleccionada
  }

  // Método para editar una entidad
  editarEntidad(entidad: IEntidad) {
    console.log('Editar entidad:', entidad);
    this.onRowSelect(entidad); // Emitir la entidad seleccionada
  }
}