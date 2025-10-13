export interface Iproducto {
    id?: number
    nombre: string
    codigo_producto: string
    marca: string
    modelo: string
    unidad_medida: string
    descripcion: string
    fecha_creacion?: string
    fecha_actualizacion?: string
    estado: 'activo' | 'inactivo'
    stock_actual: number
}
