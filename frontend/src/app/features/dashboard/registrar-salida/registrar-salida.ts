import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.html',
  styleUrls: ['./registrar-salida.css'],
   imports: [CommonModule, ReactiveFormsModule]
})
export class RegistrarSalidaComponent {
  salidaForm: FormGroup;
  salidasRegistradas: any[] = [];

  constructor(private fb: FormBuilder) {
    this.salidaForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      ubicacion: ['', Validators.required]
    });
  }

  onRegistrar() {
    if (this.salidaForm.valid) {
      const nuevaSalida = {
        ...this.salidaForm.value,
        fecha: new Date()
      };
      this.salidasRegistradas.push(nuevaSalida);
      this.salidaForm.reset();
    }
  }
}
