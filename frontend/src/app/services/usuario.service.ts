import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { IUsuario } from '../models/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly API_URL = 'http://localhost:8000/api/v1/usuarios'; // ajusta si tu backend corre en otro puerto

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<IUsuario> {
    return this.http.post<IUsuario>(`${this.API_URL}/login/`, { email, password }).pipe(
      tap((usuario) => {
        if (usuario.token) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          localStorage.setItem('token', usuario.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
  }

  getUsuarioActual(): IUsuario | null {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('token');
  }
}
