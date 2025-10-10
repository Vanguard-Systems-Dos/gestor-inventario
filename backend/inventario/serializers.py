from rest_framework import serializers
from .models import Categoria, Producto


class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = [
            "id_producto",
            "nombre",
            "codigo_producto",
            "marca",
            "modelo",
            "unidad_medida",
            "descripcion",
            "fecha_creacion",
            "fecha_actualizacion",
            "estado",
            "stock_actual",
            "proveedor",
            "categoria",
        ]


class CategoriaSerializer(serializers.ModelSerializer):

    productos = ProductoSerializer(many=True, read_only=True)

    class Meta:
        model = Categoria
        fields = ["id_categoria", "nombre", "descripcion", "productos"]
