import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, 
  ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-formulario-de-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-de-registro.html',
  styleUrl: './formulario-de-registro.css'
})

export class FormularioDeRegistro implements OnInit {
  registroFormulario!: FormGroup
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registroFormulario = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.nullValidator]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]]
      },
      { validators: this.passwordMatchValidator } 
    )
  }

  //Validador que comparar contraseña y confirmacion 
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      return { mismatch: true };
    }
    return null;
  }

   onSubmit(): void {
    if (this.registroFormulario.valid) {
      console.log('Formulario valido:', this. registroFormulario.valid)
      this.router.navigate(['/login'])
    } else {
      this.registroFormulario.markAllAsTouched()
      console.log("no anda")
    }
  }



}
