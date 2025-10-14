export interface Iproducto {
    id_producto?: number
    nombre: string
    codigo_producto: string
    marca: string
    modelo: string
    unidad_medida: number
    unidad_medida_nombre: string
    proveedor: number
    categoria: number
    descripcion: string
    fecha_creacion?: string
    fecha_actualizacion?: string
    estado: 'activo' | 'inactivo'
    stock_actual: number
}
