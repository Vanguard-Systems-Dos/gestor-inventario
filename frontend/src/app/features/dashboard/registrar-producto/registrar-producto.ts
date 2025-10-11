import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-registrar-productos',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './registrar-producto.html',
  styleUrls: ['./registrar-producto.css']
})
export class RegistrarProductosComponent implements OnInit {

  entradaForm!: FormGroup;
  categorias$!: Observable<{ id: number, nombre: string }[]>;
  mensaje = '';
  esEdicion: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Simulación de categorías locales (sin servicio externo)
    this.categorias$ = of([
      { id: 1, nombre: 'Insumos' },
      { id: 2, nombre: 'Herramientas' },
      { id: 3, nombre: 'Equipos' }
    ]);

    // Definir el formulario reactivo
    this.entradaForm = this.fb.group({
      codigo_producto: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
      cantidad: [null, [Validators.required, Validators.min(1)]],
      ubicacion: [''],
      observaciones: ['']
    });
  }

  // Getters para el template
  get codigo_producto() { return this.entradaForm.get('codigo_producto'); }
  get categoria() { return this.entradaForm.get('categoria'); }
  get cantidad() { return this.entradaForm.get('cantidad'); }

  guardarEntrada() {
    if (this.entradaForm.invalid) {
      this.entradaForm.markAllAsTouched();
      return;
    }

    const entrada = this.entradaForm.value;
    console.log('Entrada registrada:', entrada);

    this.mensaje = 'Entrada registrada correctamente';
    setTimeout(() => {
      this.mensaje = '';
      this.cdr.detectChanges();
    }, 3000);

    this.entradaForm.reset();
  }

  cancelarFormulario() {
    this.entradaForm.reset();
  }

  primeraLetraMayuscula(campo: string) {
    const control = this.entradaForm.get(campo);
    if (control) {
      const valor = control.value;
      if (valor && typeof valor === 'string') {
        control.setValue(valor.charAt(0).toUpperCase() + valor.slice(1), { emitEvent: false });
      }
    }
  }
}
