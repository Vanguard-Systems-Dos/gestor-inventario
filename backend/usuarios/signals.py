from django.db.models.signals import post_migrate
from django.dispatch import receiver
from usuarios.models import Usuario
from django.db import ProgrammingError, OperationalError

usuarios_cargados = False  # variable global para controlar ejecución


@receiver(post_migrate)
def cargar_usuarios_post_migrate(sender, **kwargs):
    global usuarios_cargados
    if usuarios_cargados:
        return

    usuarios_data = [
        {
            "nombre": "Maximiliano Scarpatti",
            "dni": "30812080",
            "rol": "admin",
            "password": "Abc1234$",
        },
        {
            "nombre": "Aldo A Minoldo",
            "dni": "20873426",
            "rol": "admin",
            "password": "aam1234",
        },
        {
            "nombre": "Nicolas Minoldo",
            "dni": "45690598",
            "rol": "admin",
            "password": "Aei123+",
        },
        {
            "nombre": "Patricio Rodriguez",
            "dni": "43997975",
            "rol": "admin",
            "password": "Pato123",
        },
    ]

    try:
        for data in usuarios_data:
            usuario, created = Usuario.objects.get_or_create(
                dni=data["dni"],
                defaults={"nombre": data["nombre"], "rol": data["rol"]},
            )
            if created:
                usuario.set_password(data["password"])
                usuario.save()
                print(f"✅ Usuario {usuario.nombre} creado automáticamente.")
            else:
                print(f"⚠️ Usuario {usuario.nombre} ya existe, se omitió.")

        usuarios_cargados = True
        print("✅ Usuarios cargados.")

    except (ProgrammingError, OperationalError) as e:
        print(f"⚠️ No se pudo cargar usuarios automáticamente: {e}")
