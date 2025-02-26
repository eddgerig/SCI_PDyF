import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioBdService } from '../service/usuario-bd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder,
              private usuarioBdService: UsuarioBdService,
              private router: Router
  ) {
    this.loginForm = this.fb.group({
      //email: ['', [Validators.required, Validators.email]],//realmente deberia ser el user que se coloque
      email: ['', [Validators.required]],//realmente deberia ser el user que se coloque
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      // Add your login logic here
      
     /* let valid = this.usuarioBdService.login(this.loginForm.value['email'], this.loginForm.value['password'])
      if(valid){
        console.log('Login correcto');
        // Redireccionar 
      }
      else{
        console.log('Login incorrecto');
      }
      */
      this.usuarioBdService.login(this.loginForm.value['email'], this.loginForm.value['password'])
      .subscribe((value:boolean) => {
        if(value){
          console.log('Login correcto----');
          // Redireccionar
          this.router.navigate(['/casos']);
        }else{
          console.log('Login incorrecto------');
        }
      });
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}