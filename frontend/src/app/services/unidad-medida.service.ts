import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUnidadMedida } from '../models/iunidad-medida';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  private apiUrl = 'http://localhost:8000/api/v1/movimientos/unidadmedida/'

  constructor(private http: HttpClient) { }

  obtenerUnidadesMedidas(): Observable<IUnidadMedida[]> {
    return this.http.get<IUnidadMedida[]>(this.apiUrl)
  }

}
