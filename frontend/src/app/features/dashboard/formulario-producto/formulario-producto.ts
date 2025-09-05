import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Iproducto } from '../../../models/iproducto';
import { ProductoService } from '../../../services/producto.service';

@Component({
  standalone: true,
  selector: 'app-formulario-producto',
  imports: [CommonModule, FormsModule],
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

  mensaje = ''

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {

  }

  altaProducto(producto: Iproducto) {
    this.productoService.crearProductos(this.producto).subscribe({
      next: (res => {
        this.mensaje = 'El producto se Guardo correctamente'

      }),
      error: (err => {
        console.error('Ocurrio un Error al Guardar Producto')
        this.mensaje = 'Ocurrio un Error al Guardar Producto'
      })
    })
  }


  unidadesMedida = [
  { codigo: 'UN', nombre: 'Unidad' },
  { codigo: 'CA', nombre: 'Caja' },
  { codigo: 'PA', nombre: 'Paquete' },
  { codigo: 'BOL', nombre: 'Bolsa' },
  { codigo: 'BOT', nombre: 'Botella' },
  { codigo: 'LAT', nombre: 'Lata' },
  { codigo: 'ROL', nombre: 'Rollo' },
  { codigo: 'M', nombre: 'Metro' },
  { codigo: 'CM', nombre: 'Centímetro' },
  { codigo: 'MM', nombre: 'Milímetro' },
  { codigo: 'KG', nombre: 'Kilogramo' },
  { codigo: 'G', nombre: 'Gramo' },
  { codigo: 'L', nombre: 'Litro' },
  { codigo: 'ML', nombre: 'Mililitro' },
  { codigo: 'M2', nombre: 'Metro cuadrado' },
  { codigo: 'M3', nombre: 'Metro cúbico' },
  { codigo: 'PZ', nombre: 'Piezas' },
  { codigo: 'JGO', nombre: 'Juego' },
  { codigo: 'TAR', nombre: 'Tarro' }
];


}
