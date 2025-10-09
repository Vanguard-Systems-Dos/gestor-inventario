from django.db import models

# Create your models here.
class Proveedor(models.Model):
    id_proveedor = models.AutoField(primary_key=True)
    razon_social =  models.CharField(max_length=100)
    email =  models.EmailField(unique=True)
    direccion  =  models.CharField(max_length=150)
    telefono =  models.CharField(max_length=20,blank=True,null=True)

    class Meta:
        verbose_name = "Proveedor"
        verbose_name_plural = "Proveedores"

    def __str__(self):
        return self.razon_social
