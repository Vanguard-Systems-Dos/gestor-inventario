import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
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

  productos = [
    { nombre: 'ProductoA', categoria: 'Categoria#1', cantidad: 1000, ubicacion: 'Ubicacion#1' },
    { nombre: 'ProductoB', categoria: 'Categoria#2', cantidad: 1000, ubicacion: 'Ubicacion#2' },
    { nombre: 'ProductoC', categoria: 'Categoria#3', cantidad: 1000, ubicacion: 'Ubicacion#3' },
    { nombre: 'ProductoD', categoria: 'Categoria#4', cantidad: 1000, ubicacion: 'Ubicacion#4' },
    { nombre: 'ProductoE', categoria: 'Categoria#5', cantidad: 1000, ubicacion: 'Ubicacion#5' }
  ];
}
