import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Login } from '../login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)]
    })
  });

  onLogin(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);

    
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value as Login;
      console.log(loginData);
      this.authService.login(loginData);
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }
  }
}
