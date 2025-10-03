export interface Iproducto {
    id?: number
    nombre: string
    codigo_producto: string
    marca: string
    modelo: string
    unidad_medida: string
    descripcion: string
    fecha_creacion?: Date
    fecha_actualizacion?: Date
    estado: string
    stock_actual?: number
}
