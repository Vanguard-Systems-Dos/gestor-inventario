import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-buscar-producto',
  standalone: true,
  templateUrl: './buscar-producto.html',
  styleUrls: ['./buscar-producto.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class BuscarProductoComponent {
  buscarForm: FormGroup;
  resultados: any[] = []; // resultados de la búsqueda (simulados por ahora)

  constructor(private fb: FormBuilder) {
    this.buscarForm = this.fb.group({
      nombre: [''],
      categoria: [''],
      ubicacion: ['']
    });
  }

  onBuscar() {
    const valores = this.buscarForm.value;
    console.log('Valores del formulario:', valores);

    // 🔹 Simulamos búsqueda (en el futuro podés reemplazar por un servicio HTTP)
    this.resultados = [
      {
        nombre: 'ProductoA',
        categoria: 'Categoria#1',
        cantidad: 1000,
        ubicacion: 'Ubicacion#1'
      }
    ];
  }
}
