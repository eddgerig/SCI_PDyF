import { Component, EventEmitter, Output } from '@angular/core';
import { FormArchivoComponent } from "../form-archivo/form-archivo.component";
import { TableArchivoComponent } from "../table-archivo/table-archivo.component";
import { TabsArchivoComponent } from "../tabs-archivo/tabs-archivo.component";

@Component({
  selector: 'app-add-archivo',
  standalone: true,
  imports: [FormArchivoComponent, TableArchivoComponent, TabsArchivoComponent],

  templateUrl: './add-archivo.component.html',
  styleUrl: './add-archivo.component.css'
})
export class AddArchivoComponent {

@Output() goBack = new EventEmitter<void>();
onGoBack() {
  console.log("onGoBack AddCasoComponent")
  this.goBack.emit(); // Emitir el evento
}
}
