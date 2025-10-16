export interface IUsuario {
  id_usuario: number;
  nombre: string;
  dni: string;
  rol: 'admin' | 'basico';
  token?: string;
  fecha_expiracion?: string;
}
