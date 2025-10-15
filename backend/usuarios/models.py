# usuarios/models.py
from django.db import models
from django.utils import timezone
from django.contrib.auth.hashers import make_password, check_password
import uuid


class Usuario(models.Model):
    ROLES = [
        ("admin", "Administrador"),
        ("basico", "Básico"),
    ]

    id_usuario = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    dni = models.CharField(max_length=20, unique=True)
    rol = models.CharField(max_length=20, choices=ROLES, default="basico")
    password = models.CharField(max_length=128)
    fecha_creacion = models.DateTimeField(default=timezone.now)
    activo = models.BooleanField(default=True)

    class Meta:
        verbose_name = "Usuario"
        verbose_name_plural = "Usuarios"

    def __str__(self):
        return f"{self.nombre} ({self.dni})"

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    # Métodos de tu diagrama
    def crearUsuario(self):
        self.save()
        return self

    def actualizarUsuario(self, **kwargs):
        for k, v in kwargs.items():
            setattr(self, k, v)
        self.save()
        return True

    def eliminarUsuario(self):
        self.activo = False
        self.save()
        return True

    def usuarioNoEncontrado(self):
        return f"Usuario con id {self.id_usuario} no encontrado"


class Sesion(models.Model):
    usuario = models.ForeignKey(
        Usuario, related_name="sesiones", on_delete=models.CASCADE
    )
    token = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    fecha_inicio = models.DateTimeField(default=timezone.now)
    fecha_expiracion = models.DateTimeField()

    def validarSesion(self):
        return self.fecha_expiracion > timezone.now()

    def cerrarSesion(self):
        self.fecha_expiracion = timezone.now()
        self.save()

    def sesionExpirada(self):
        return timezone.now() > self.fecha_expiracion
