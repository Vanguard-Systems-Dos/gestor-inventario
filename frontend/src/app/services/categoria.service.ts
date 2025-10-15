import { Injectable } from '@angular/core';
import { ICategoria } from '../models/icategoria';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = 'http://localhost:8000/api/v1/inventario/categorias'

  constructor(private http: HttpClient) { }

  obtenerCategorias(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(this.apiUrl)
  }
}
