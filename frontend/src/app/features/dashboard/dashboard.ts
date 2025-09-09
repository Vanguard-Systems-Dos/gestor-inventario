import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Iproducto } from '../../models/iproducto';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  listarProductos: Iproducto[] = []

  constructor(private productoServicio: ProductoService) { }


  ngOnInit(): void {
    this.cargaTablaDashboard()
  }

  cargaTablaDashboard() {
    this.productoServicio.obtenerProductos().subscribe({
      next: (data =>{
        this.listarProductos = data
      }),
      error: (err =>{
        console.error('Error al listar los productos',err)
      })
    })
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

