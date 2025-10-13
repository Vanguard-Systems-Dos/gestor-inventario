from inventario.models import Categoria

categorias_data = [
    {"nombre": "Ferreteria", "descripcion": "Herramientas, tornillos, tuercas y otros articulos de ferreteria."},
    {"nombre": "Electricidad", "descripcion": "Materiales electricos como cables, lamparas, enchufes."},
    {"nombre": "Plomeria", "descripcion": "Accesorios y herramientas para instalaciones sanitarias."},
    {"nombre": "Pintureria", "descripcion": "Pinturas, pinceles, rodillos y productos relacionados."},
    {"nombre": "Construccion", "descripcion": "Materiales y herramientas para obra gruesa y fina."},
    {"nombre": "Seguridad industrial", "descripcion": "Cascos, guantes, senaletica, y elementos de proteccion personal."},
    {"nombre": "Limpieza", "descripcion": "Productos y utensilios para limpieza industrial o domestica."},
    {"nombre": "Jardineria", "descripcion": "Herramientas y productos para cuidado del jardin."},
    {"nombre": "Automotriz", "descripcion": "Accesorios y repuestos para vehiculos."},
    {"nombre": "Oficina", "descripcion": "Materiales de oficina como papeleria, toner, mobiliario pequeno."},
    {"nombre": "Indumentaria", "descripcion": "Prendas en general y accesorios para negocios de ropa."}
]

for data in categorias_data:
    Categoria.objects.get_or_create(nombre=data["nombre"], defaults=data)

print("✅ Categorias cargadas correctamente.")
