from rest_framework import serializers
from .models import UnidadMedida, MovimientoStock
from inventario.models import Producto  # Importamos el modelo relacionado

class ProductoSerializer(serializers.ModelSerializer):
    """Serializer para mostrar los datos del producto dentro del movimiento"""
    class Meta:
        model = Producto
        fields = '__all__'  # Incluye todos los campos del producto


class UnidadMedidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = UnidadMedida
        fields = '__all__'


class MovimientoStockSerializer(serializers.ModelSerializer):
    # Incluye los datos completos del producto
    id_producto = ProductoSerializer(read_only=True)
    # Permite enviar el ID del producto al crear o actualizar
    id_producto_id = serializers.PrimaryKeyRelatedField(
        queryset=Producto.objects.all(),
        source='id_producto',
        write_only=True
    )

    class Meta:
        model = MovimientoStock
        fields = '__all__'
