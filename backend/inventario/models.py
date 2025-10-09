from django.db import models

# Create your models here.
class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre =  models.CharField(max_length=50,unique=True)
    descripcion =  models.CharField(max_length=150, blank=True, null=True)

    def __str__(self):
        return self.nombre