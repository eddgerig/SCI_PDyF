import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.css'
})
export class SidenavComponent {
  logout() {
    // Implement logout logic here
    console.log('Logging out...');
  }
}