import { Component } from '@angular/core';
import { SidenavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [SidenavComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css'
})
export class TestPageComponent {

}
