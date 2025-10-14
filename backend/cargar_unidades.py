# cargar_unidades.py

from movimientos.models import UnidadMedida
import unicodedata

# Función para normalizar texto (quitar acentos y reemplazar ñ → n)
def normalizar_texto(texto):
    texto = unicodedata.normalize('NFKD', texto).encode('ASCII', 'ignore').decode('utf-8')
    return texto.replace('ñ', 'n').replace('Ñ', 'N')

data = [
    {"codigo": "UN", "nombre": "Unidad"},
    {"codigo": "CA", "nombre": "Caja"},
    {"codigo": "PA", "nombre": "Paquete"},
    {"codigo": "BOL", "nombre": "Bolsa"},
    {"codigo": "BOT", "nombre": "Botella"},
    {"codigo": "LAT", "nombre": "Lata"},
    {"codigo": "ROL", "nombre": "Rollo"},
    {"codigo": "M", "nombre": "Metro"},
    {"codigo": "CM", "nombre": "Centimetro"},
    {"codigo": "MM", "nombre": "Milimetro"},
    {"codigo": "KG", "nombre": "Kilogramo"},
    {"codigo": "G", "nombre": "Gramo"},
    {"codigo": "L", "nombre": "Litro"},
    {"codigo": "ML", "nombre": "Mililitro"},
    {"codigo": "M2", "nombre": "Metro cuadrado"},
    {"codigo": "M3", "nombre": "Metro cubico"},
    {"codigo": "PZ", "nombre": "Piezas"},
    {"codigo": "JGO", "nombre": "Juego"},
    {"codigo": "TAR", "nombre": "Tarro"},
    {"codigo": "SOB", "nombre": "Sobre"},
    {"codigo": "FRAS", "nombre": "Frasco"},
    {"codigo": "BID", "nombre": "Bidon"},
    {"codigo": "TUB", "nombre": "Tubo"},
    {"codigo": "PQT", "nombre": "Paquete chico"},
    {"codigo": "TARJ", "nombre": "Tarjeta"},
    {"codigo": "BUL", "nombre": "Bulk / a granel"},
    {"codigo": "ROLLO", "nombre": "Rollo grande"},
    {"codigo": "JARR", "nombre": "Jarra"},
    {"codigo": "BLQ", "nombre": "Bloque"},
    {"codigo": "CJA", "nombre": "Caja grande"},
    {"codigo": "SACO", "nombre": "Saco"},
    {"codigo": "LATGR", "nombre": "Lata grande"},
    {"codigo": "TUBO", "nombre": "Tubo plastico"},
    {"codigo": "FRASC", "nombre": "Frasco chico"},
    {"codigo": "BOTGR", "nombre": "Botella grande"},
    {"codigo": "PAQGR", "nombre": "Paquete grande"},
    {"codigo": "CAPS", "nombre": "Capsulas"},
    {"codigo": "TABL", "nombre": "Tabla"},
    {"codigo": "PLCA", "nombre": "Placa"},
    {"codigo": "ROLPE", "nombre": "Rollo de papel"},
    {"codigo": "SOBGR", "nombre": "Sobre grande"},
    {"codigo": "BARR", "nombre": "Barra"},
    {"codigo": "FRGR", "nombre": "Frasco grande"},
    {"codigo": "TAP", "nombre": "Tapon"},
    {"codigo": "DISP", "nombre": "Dispensador"},
    {"codigo": "TUBGR", "nombre": "Tubo grande"},
    {"codigo": "BIDGR", "nombre": "Bidon grande"},
    {"codigo": "BULGR", "nombre": "Bulk grande"},
    {"codigo": "ROLCH", "nombre": "Rollo chico"},
    {"codigo": "PAQCH", "nombre": "Paquete chico"},
]

for item in data:
    nombre_normalizado = normalizar_texto(item["nombre"])
    UnidadMedida.objects.get_or_create(
        codigo=item["codigo"],
        defaults={"nombre": nombre_normalizado}
    )