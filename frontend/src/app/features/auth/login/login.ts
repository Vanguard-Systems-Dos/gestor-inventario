import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule, MatSnackBarModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.snackBar.open('Por favor, completá todos los campos correctamente.', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-warning'],
      });
      return;
    }

    const { email, password } = this.loginForm.value;

    this.usuarioService.login(email, password).subscribe({
      next: (usuario) => {
        this.snackBar.open('Inicio de sesión exitoso 🎉', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-success'],
        });
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error de login:', err);
        this.snackBar.open('Credenciales inválidas 😞', 'Cerrar', {
          duration: 3000,
          panelClass: ['snackbar-error'],
        });
      },
    });
  }
}
