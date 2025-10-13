from proveedores.models import Proveedor

proveedores_data = [
    {
        "razon_social": "Distribuidora Los Andes S.A.",
        "email": "contacto@losandes.com",
        "direccion": "Av. Siempre Viva 742, Mendoza",
        "telefono": "261-4567890"
    },
    {
        "razon_social": "Insumos Industriales Cordoba",
        "email": "ventas@iicordoba.com.ar",
        "direccion": "Bv. San Juan 1234, Cordoba Capital",
        "telefono": "351-1234567"
    },
    {
        "razon_social": "TechPro S.R.L.",
        "email": "info@techpro.com",
        "direccion": "Calle Falsa 123, Rosario",
        "telefono": "341-9876543"
    },
    {
        "razon_social": "Ferreteria Central",
        "email": "central@ferreteria.com",
        "direccion": "Mitre 456, San Miguel de Tucumán",
        "telefono": "381-4441122"
    },
    {
        "razon_social": "Logistica Norte",
        "email": "norte@logistica.com.ar",
        "direccion": "Ruta 9 km 34, Salta",
        "telefono": "387-6677889"
    },
]

for data in proveedores_data:
    Proveedor.objects.get_or_create(email=data["email"], defaults=data)

print("✅ Proveedores cargados correctamente.")
