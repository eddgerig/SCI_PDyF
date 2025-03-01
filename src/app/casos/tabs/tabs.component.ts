import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Output() onSelected: EventEmitter<any> = new EventEmitter<any>();
    
  tabs = {
    caso: 0,
    avance: 1,
    cerrar: 2,
    reabrir: 3,
  };
activeTabId = this.tabs.caso;
  constructor() { }

  changeTab(tabId: number) {
    console.log("onRowSelect", tabId)
    this.activeTabId = tabId;
    this.onSelected.next(tabId);
  }
}
