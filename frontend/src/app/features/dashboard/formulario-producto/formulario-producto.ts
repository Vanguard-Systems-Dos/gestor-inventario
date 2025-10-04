import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Iproducto } from '../../../models/iproducto';
import { ProductoService } from '../../../services/producto.service';
import { UnidadMedidaService } from '../../../services/unidad-medida.service';
import { IUnidadMedida } from '../../../models/iunidad-medida';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-formulario-producto',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './formulario-producto.html',
  styleUrls: ['./formulario-producto.css']
})
export class FormularioProducto implements OnInit {

  productoForm!: FormGroup;
  unidadesMedidas$!: Observable<IUnidadMedida[]>;
  mensaje = '';
  esEdicion: boolean = false;
  productoOriginal!: Iproducto

  constructor(
    private productoService: ProductoService,
    private unidadMedidaService: UnidadMedidaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.unidadesMedidas$ = this.unidadMedidaService.obtenerUnidadesMedidas();

    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required]],
      codigo_producto: ['', [Validators.required]],
      marca: [''],
      modelo: [''],
      unidad_medida: ['', [Validators.required]],
      descripcion: [''],
      estado: ['activo', [Validators.required]],
      stock_actual: [null, [Validators.required, Validators.min(1)]]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.esEdicion = true;
        this.productoService.obtenerProductoPorId(id).subscribe(
          prod => {
            this.productoOriginal = prod  //guardo todo el objeto original
            // Rellenar el formulario con los datos obtenidos
            this.productoForm.patchValue(prod);
          },
          error => {
            console.error('Error al cargar el producto para edición', error);
          }
        );
      }
    });
  }


  get nombre() { return this.productoForm.get('nombre'); }
  get codigo_producto() { return this.productoForm.get('codigo_producto'); }
  get unidad_medida() { return this.productoForm.get('unidad_medida') }
  get stock_actual() { return this.productoForm.get('stock_actual') }


  guardarProducto() {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      return;
    }

    const producto: Iproducto = this.productoForm.value;
    const ahora = new Date().toISOString()
    // Fecha y hora actual en formato ISO
    if (this.esEdicion) {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        producto.fecha_actualizacion = ahora;
        producto.fecha_creacion = this.productoOriginal.fecha_creacion
        this.productoService.actualizarProducto(id, producto).subscribe({
          next: () => {
            this.mensaje = 'El producto se actualizó correctamente';
            setTimeout(() => {
              this.mensaje = '';
              this.cdr.detectChanges();
            }, 3000);
          },
          error: () => {
            console.error('Ocurrió un error al actualizar el producto');
            this.mensaje = 'Ocurrió un error al actualizar el producto';
            setTimeout(() => {
              this.mensaje = '';
              this.cdr.detectChanges();
            }, 3000);
          }
        });
      }
    } else {
      producto.fecha_creacion = ahora
      this.productoService.crearProductos(producto).subscribe({
        next: () => {
          this.mensaje = 'El producto se guardó correctamente';
          setTimeout(() => {
            this.mensaje = '';
            this.cdr.detectChanges();
          }, 3000);
          this.productoForm.reset({
            estado: 'activo',
            stock_actual: 0
          });
        },
        error: () => {
          console.error('Ocurrió un error al guardar el producto');
          this.mensaje = 'Ocurrió un error al guardar el producto';
          setTimeout(() => {
            this.mensaje = '';
            this.cdr.detectChanges();
          }, 3000);
        }
      });
    }
  }

  cancelarFormulario() {
    this.productoForm.reset({
      estado: 'activo',
      stock_actual: null
    });
  }

  primeraLetraMayuscula(campo: string) {
    const control = this.productoForm.get(campo)
    if (control) {
      const valor = control.value
      if (valor && typeof valor === 'string') {
        control.setValue(valor.charAt(0).toUpperCase() + valor.slice(1), { emitEvent: false })
      }
    }
  }
}
