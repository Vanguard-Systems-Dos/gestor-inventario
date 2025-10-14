import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Iproducto } from '../../models/iproducto';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  listarProductos: Iproducto[] = []
  productosFiltrados: Iproducto[] = []
  filtro: string = ''

  constructor(private productoServicio: ProductoService) { }


  ngOnInit(): void {
    this.cargaTablaDashboard()
  }

  cargaTablaDashboard() {
    this.productoServicio.obtenerProductos().subscribe({
      next: (data => {
        this.listarProductos = data
        this.productosFiltrados = data
      }),
      error: (err => {
        console.error('Error al listar los productos', err)
      })
    })
  }

  filtrarProductos(): void {
    const texto = this.filtro.trim().toLowerCase();
    this.productosFiltrados = this.listarProductos.filter(prod =>
      prod.nombre.toLowerCase().includes(texto) ||
      prod.codigo_producto?.toString().includes(texto) ||
      prod.marca?.toLowerCase().includes(texto) ||
      prod.modelo?.toLowerCase().includes(texto)
    );
  }


  eliminarProducto(prod: Iproducto) {
    const mensaje = `¿Desea eliminar "${prod.nombre}" con ID ${prod.id_producto}?`;
    if (confirm(mensaje)) {
      this.productoServicio.eliminarProducto(prod.id_producto!.toString()).subscribe({
        next: () => {
          this.listarProductos = this.listarProductos.filter(p => p.id_producto !== prod.id_producto);
          this.filtrarProductos()
          console.log('Producto eliminado correctamente');
        },
        error: (err) => {
          console.error('Error al eliminar el producto', err);
        }
      });
    }
  }

  obtenerEstado(codigo: string): string {
    switch (codigo) {
      case 'A':
        return 'Activo'
      case 'I':
        return 'Inactivo'
      default:
        return 'Desconicido'
    }
  }


  // Datos simulados
  tarjetasInfo = [
    { titulo: 'Total de Productos', valor: 150 },
    { titulo: 'Bajo Stock', valor: 5 },
    { titulo: 'Entradas Recientes', valor: 10 },
    { titulo: 'Frecuencia de Reposicion', valor: 8 }
  ];

  graficos = [
    { titulo: 'Productos Más Utilizados', img: 'img/graph.svg' },
    { titulo: 'Frecuencia de Pedidos', img: 'img/stock_box.svg' }
  ];
}

