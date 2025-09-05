import { Injectable } from '@angular/core';
import { Iproducto } from '../models/iproducto';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'http://localhost:3001/productos'

  constructor(private http: HttpClient) { }

  crearProductos(producto: Iproducto): Observable<Iproducto> {
    return this.http.post<Iproducto>(this.apiUrl, producto).pipe(
      catchError(err => {
        console.error('No se registro el Producto', err)
        return throwError(() => new Error('No se registro el Producto'))
      })
    )
  }

}
