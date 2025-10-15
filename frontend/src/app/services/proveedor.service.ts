import { Injectable } from '@angular/core';
import { IProveedor } from '../models/iproveedor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiUrl = 'http://localhost:8000/api/v1/proveedores/'

  constructor(private http: HttpClient) { }

  obtenerProveedores(): Observable<IProveedor[]> {
    return this.http.get<IProveedor[]>(this.apiUrl)
  }

}
