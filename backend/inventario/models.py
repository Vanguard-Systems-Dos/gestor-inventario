from django.db import models
from proveedores.models import Proveedor

# Create your models here.
class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre =  models.CharField(max_length=50,unique=True)
    descripcion =  models.CharField(max_length=150, blank=True, null=True)
    
    class Meta: 
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.nombre
    
    
class Producto(models.Model):
    id_producto = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    codigo_producto = models.CharField(max_length=50, unique=True)
    marca = models.CharField(max_length=50)
    modelo = models.CharField(max_length=50, blank=True, null=True)
    unidad_medida = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=200, blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    estado = models.CharField(max_length=1, choices=[
        ('A', 'Activo'),
        ('I', 'Inactivo'),
    ], default='A')
    stock_actual = models.IntegerField(default=0)
    
    #foraneas =>no usar el id_producto para no confundir a django
    proveedor = models.ForeignKey(Proveedor, on_delete=models.CASCADE)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    
    class Meta: 
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
    
    def __str__(self):
        return f"{self.nombre} ({self.codigo_producto})"
    
    