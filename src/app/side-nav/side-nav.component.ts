import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule],
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.css'
})
export class SidenavComponent {
  constructor(private router: Router) { }
  logout() {
    // Implement logout logic here
    this.router.navigate(['/login']);
    console.log('Logging out...');
  }
}