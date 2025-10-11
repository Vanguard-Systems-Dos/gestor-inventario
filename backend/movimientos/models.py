from django.db import models

# Create your models here.
class UnidadMedida(models.Model):
    id_unidad_medida = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=10, unique=True)
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombre} ({self.codigo})"

    class Meta:
        db_table = 'unidad_medida'
        verbose_name = 'Unidad de Medida'
        verbose_name_plural = 'Unidades de Medida'

class MovimientoStock(models.Model):
    id_movimiento_stock = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=20)  # muestra el código del producto
    categoria = models.CharField(max_length=50)
    cantidad = models.DecimalField(max_digits=10, decimal_places=2)
    ubicacion = models.CharField(max_length=100)
    observaciones = models.TextField(blank=True, null=True)
    estado = models.CharField(max_length=20, default='ingreso')

    # Clave foránea a Producto
    id_producto = models.ForeignKey(
        'Producto',  # o 'inventario.Producto' si está en otra app
        on_delete=models.CASCADE,
        related_name='movimientos_stock'
    )

    def __str__(self):
        return f"{self.codigo} - {self.cantidad} ({self.estado})"

    class Meta:
        db_table = 'movimiento_stock'
        verbose_name = 'Movimiento de Stock'
        verbose_name_plural = 'Movimientos de Stock'
