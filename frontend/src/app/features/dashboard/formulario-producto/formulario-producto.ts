import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iproducto } from '../../../models/iproducto';
import { ProductoService } from '../../../services/producto.service';
import { UnidadMedidaService } from '../../../services/unidad-medida.service';
import { IUnidadMedida } from '../../../models/iunidad-medida';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-formulario-producto',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './formulario-producto.html',
  styleUrls: ['./formulario-producto.css']
})
export class FormularioProducto implements OnInit {

  producto: Iproducto = {
    nombre: '',
    codigo_producto: '',
    marca: '',
    modelo: '',
    unidad_medida: '',
    descripcion: '',
    fecha_creacion: undefined,
    fecha_actualizacion: undefined,
    estado: 'activo',
    stock_actual: 0
  }

  unidadesMedidas$!: Observable<IUnidadMedida[]>
  mensaje = ''

  constructor(private productoService: ProductoService,
    private unidadMedidaService: UnidadMedidaService
  ) { }

  ngOnInit(): void {
    this.unidadesMedidas$ = this.unidadMedidaService.obtenerUnidadesMedidas()
  }

  altaProducto(producto: Iproducto) {
    this.productoService.crearProductos(this.producto).subscribe({
      next: (res => {
        this.mensaje = 'El producto se Guardo correctamente'
        this.producto = this.resetProducto()
      }),
      error: (err => {
        console.error('Ocurrio un Error al Guardar Producto')
        this.mensaje = 'Ocurrio un Error al Guardar Producto'
      })
    })
  }

  cancelarFormulario(){
    this.producto = this.resetProducto()
  }  

  resetProducto(): Iproducto {
    return {
      nombre: '',
      codigo_producto: '',
      marca: '',
      modelo: '',
      unidad_medida: '',
      descripcion: '',
      fecha_creacion: undefined,
      fecha_actualizacion: undefined,
      estado: 'activo',
      stock_actual: 0
    }
  }



}
