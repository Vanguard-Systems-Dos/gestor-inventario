import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // 👈 Import ReactiveFormsModule here
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.html',
  styleUrls: ['./registrar-producto.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule // 👈 Add it to the imports array
  ]
})
export class RegistrarProductosComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      ubicacion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Producto registrado:', this.productForm.value);
      alert('Producto registrado con éxito!');
      this.productForm.reset();
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}