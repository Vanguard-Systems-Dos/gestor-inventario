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
            "email": "maxi@example.com",
            "rol": "admin",
            "password": "Abc1234$",
        },
        {
            "nombre": "Aldo A Minoldo",
            "email": "aldo@example.com",
            "rol": "admin",
            "password": "aam1234",
        },
        {
            "nombre": "Nicolas Minoldo",
            "email": "nicolas@example.com",
            "rol": "admin",
            "password": "Aei123+",
        },
        {
            "nombre": "Patricio Rodriguez",
            "email": "pato@example.com",
            "rol": "admin",
            "password": "Pato123",
        },
    ]

    try:
        for data in usuarios_data:
            usuario, created = Usuario.objects.get_or_create(
                email=data["email"],
                defaults={
                    "nombre": data["nombre"],
                    "rol": data["rol"],
                },
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
