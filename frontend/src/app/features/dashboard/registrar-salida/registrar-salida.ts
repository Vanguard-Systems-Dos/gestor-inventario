import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-registrar-salida',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './registrar-salida.html',
  styleUrls: ['./registrar-salida.css']
})
export class RegistrarSalidaComponent implements OnInit {

  salidaForm!: FormGroup;
  mensaje = '';

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.salidaForm = this.fb.group({
      codigo_producto: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      ubicacion: [''],
      observaciones: ['']
    });
  }

  // Getters para validaciones
  get codigo_producto() { return this.salidaForm.get('codigo_producto'); }
  get categoria() { return this.salidaForm.get('categoria'); }
  get cantidad() { return this.salidaForm.get('cantidad'); }

  registrarSalida() {
    if (this.salidaForm.invalid) {
      this.salidaForm.markAllAsTouched();
      return;
    }

    // Simulación de guardado
    this.mensaje = 'Salida registrada correctamente';
    setTimeout(() => {
      this.mensaje = '';
      this.cdr.detectChanges();
    }, 3000);

    this.salidaForm.reset();
  }

  cancelarFormulario() {
    this.salidaForm.reset();
  }

  primeraLetraMayuscula(controlName: string) {
    const control = this.salidaForm.get(controlName);
    if (control && control.value) {
      const valor = control.value.trim();
      control.setValue(valor.charAt(0).toUpperCase() + valor.slice(1));
    }
  }
}
